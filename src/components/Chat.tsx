import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import { Send, MessageSquare, X, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "model"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobileViewport = window.innerWidth < 640;
    if (!isOpen || !isMobileViewport) return;

    const { body, documentElement } = document;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = documentElement.style.overflow;
    const previousTouchAction = body.style.touchAction;

    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    body.style.touchAction = "none";

    return () => {
      body.style.overflow = previousBodyOverflow;
      documentElement.style.overflow = previousHtmlOverflow;
      body.style.touchAction = previousTouchAction;
    };
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      // --- Client-Side RAG & Pre-Filtering ---
      const q = userMessage.toLowerCase();
      const isGreeting = /^(hi|hello|hey|greetings|sup)\b/i.test(q);
      let context = "";

      // 1. Personal & Contact
      if (q.includes("who") || q.includes("hervey") || q.includes("you") || q.includes("hire") || q.includes("contact") || q.includes("email") || q.includes("phone")) {
        context += `Personal Info: ${DATA.name}, Location: ${DATA.location}. Description: ${DATA.summary}. Contact: ${DATA.contact.email}, ${DATA.contact.tel}\n`;
      }

      // 2. Skills & Tech
      if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("know") || DATA.skills.some(s => q.includes(s.toLowerCase()))) {
        context += `Skills: ${DATA.skills.join(", ")}. Stack: ${JSON.stringify(DATA.stackSteps)}\n`;
      }

      // 3. Experience & Education
      if (q.includes("work") || q.includes("experience") || q.includes("job") || q.includes("school") || q.includes("education") || DATA.work.some(w => q.includes(w.company.toLowerCase()))) {
        context += `Work Experience: ${JSON.stringify(DATA.work)}. Education: ${JSON.stringify(DATA.education)}\n`;
      }

      // 4. Projects
      if (q.includes("project") || q.includes("build") || q.includes("portfolio") || DATA.projects.work.some(p => q.includes(p.title.toLowerCase())) || DATA.projects.personal.some(p => q.includes(p.title.toLowerCase()))) {
        context += `Projects: ${JSON.stringify(DATA.projects)}\n`;
      }

      // PRE-FILTER: Block irrelevant queries to save API costs
      if (!context && !isGreeting) {
        setMessages((prev) => [
          ...prev,
          { role: "model", text: "I am programmed to only discuss Hervey's engineering portfolio, skills, and experience. Please ask me about his work!" }
        ]);
        setIsLoading(false);
        return;
      }

      // 5. Strict System Prompt Enforcement
      const systemPrompt = `You are the exclusive AI assistant for Hervey Mapano's portfolio.
CRITICAL RULES:
1. ONLY answer questions based on the provided CONTEXT below. Do NOT use outside knowledge.
2. If the user asks something outside the CONTEXT, politely decline and state you only answer questions about Hervey.
3. Keep answers concise, professional, and highlight his "architectural rigor" and "engineering skills".
4. Format your response cleanly using Markdown.

CONTEXT EXTRACTED FROM PORTFOLIO:
${context ? context : "User is just greeting. Introduce yourself as Hervey's AI assistant and ask how you can help them learn about his work."}

User query: ${userMessage}`;

      // Add an empty placeholder for the streaming response
      setMessages((prev) => [...prev, { role: "model", text: "" }]);

      const responseStream = await ai.models.generateContentStream({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{ text: systemPrompt }],
          },
        ],
      });

      for await (const chunk of responseStream) {
        if (chunk.text) {
          setMessages((prev) => {
            const newMessages = [...prev];
            const lastIndex = newMessages.length - 1;
            newMessages[lastIndex] = {
              ...newMessages[lastIndex],
              text: newMessages[lastIndex].text + chunk.text,
            };
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Error connecting to AI. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`fixed z-50 ${
        isOpen
          ? "inset-0 sm:inset-auto sm:right-6 sm:bottom-24"
          : "right-4 bottom-20 sm:right-6 sm:bottom-24"
      }`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`
              max-sm:chat-mobile-shell flex h-full w-full flex-col overflow-hidden bg-background shadow-2xl sm:h-125 sm:w-96 sm:rounded-2xl sm:border sm:border-foreground/10
            `}
          >
            {/* Header */}
            <div className="px-safe pt-safe flex items-center justify-between border-b border-foreground/10 bg-foreground/5 px-4 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-bold text-sm">AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-foreground/10 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-4 scrollbar-hide"
            >
              {messages.length === 0 && (
                <div className="text-center text-zinc-500 text-sm mt-10">
                  Ask me anything about Hervey's work!
                </div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === "user"
                        ? "bg-foreground text-background"
                        : "bg-foreground/5 border border-foreground/10 [&_a]:underline [&_code]:rounded [&_code]:bg-foreground/10 [&_code]:px-1 [&_code]:py-0.5 [&_li]:ml-4 [&_ol]:list-decimal [&_ol]:space-y-1 [&_p]:my-0 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-foreground/10 [&_pre]:p-3 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_ul]:list-disc [&_ul]:space-y-1"
                    }`}
                  >
                    {msg.role === "model" ? (
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {msg.text}
                      </ReactMarkdown>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-foreground/5 border border-foreground/10 p-3 rounded-2xl">
                    <Loader2 size={16} className="animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-safe border-t border-foreground/10 px-4 pt-4 pb-safe">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-foreground/30 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="p-2 bg-foreground text-background rounded-xl hover:opacity-80 disabled:opacity-50 transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-14 w-14 absolute items-center -z-50  justify-center rounded-full bg-foreground text-background shadow-2xl transition-all hover:scale-110 active:scale-95 ${
          isOpen
            ? "hidden sm:absolute sm:right-0 sm:bottom-0 sm:flex"
            : "absolute right-0 bottom-0"
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
