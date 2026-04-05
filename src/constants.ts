export const DATA = {
  name: "Hervey Geralph C. Mapano",
  initials: "HM",
  location: "Cagayan de Oro City, Philippines",
  locationLink: "https://www.google.com/maps/place/Cagayan+de+Oro,+Misamis+Oriental,+Philippines",
  description: "Full Stack Developer specializing in high-performance web applications and automation systems.",
  summary: "Web Developer at Wela School Systems with a strong background in R&D. I build enterprise-level architectural systems using modern stacks like Next.js, NestJS, and Frappe. Experienced in AI integration, LMS development, and peer-to-peer marketplaces.",
  avatarUrl: "https://github.com/herveyyy.png",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "Frappe v15",
    "NestJS",
    "Vue 3",
    "Drizzle ORM",
    "PostgreSQL",
    "SQLite",
    "Firebase",
    "Git",
    "Docker",
    "Amazon S3",
    "Gemini AI",
  ],
  navbar: [
    { href: "#", icon: "Home", label: "Home" },
    { href: "#work-projects", icon: "Briefcase", label: "Work" },
    { href: "#personal-projects", icon: "Folder", label: "Personal" },
    { href: "#experience", icon: "Briefcase", label: "Experience" },
    { href: "#skills", icon: "Cpu", label: "Skills" },
  ],
  contact: {
    email: "mapanohervey@gmail.com",
    tel: "+639603295633",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/herveyyy",
        icon: "Github",
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/herveymapano",
        icon: "Linkedin",
      },
      X: {
        name: "X",
        url: "#",
        icon: "Twitter",
      },
    },
  },
  work: [
    {
      company: "Wela School Systems",
      href: "https://wela.online",
      badges: [],
      location: "Remote",
      title: "Web Developer (R&D Department)",
      logoUrl: "",
      start: "Sept 2024",
      end: "Present",
      description:
        "Developing well-designed, testable, and efficient code. Integrating back-end services and databases. Maintaining and scaling AI-integrated educational platforms.",
    },
    {
      company: "DENR Region-X",
      href: "#",
      badges: [],
      location: "Cagayan de Oro",
      title: "IT Technician & Web Developer (OJT)",
      logoUrl: "",
      start: "Feb 2024",
      end: "June 2024",
      description:
        "Troubleshooting IT issues, analyzing network performance, and contributing to web-based solutions.",
    },
  ],
  education: [
    {
      school: "Liceo de Cagayan University",
      href: "https://www.liceo.edu.ph",
      degree: "Bachelor of Science in Information Technology",
      logoUrl: "",
      start: "2020",
      end: "2024",
    },
  ],
  projects: {
    work: [
      {
        title: "Silidv3 LMS",
        href: "#",
        dates: "2024",
        active: true,
        description:
          "AI-integrated LMS built on a Frappe and NestJS dual-backend architecture. Features an AI-driven Student Hub for note summarization and conversational English practice.",
        technologies: ["Frappe", "NestJS", "Vue3", "TailwindCSS", "Amazon S3", "Gemini AI", "DrizzleORM"],
        links: [],
        image: "https://picsum.photos/seed/silid/800/400",
      },
      {
        title: "Skillings",
        href: "https://skillings.io",
        dates: "2024",
        active: true,
        description:
          "Flexible peer-to-peer tutoring marketplace where educators list specialized courses and students request targeted learning sessions.",
        technologies: ["Next.js", "TailwindCSS", "DrizzleORM", "PostgreSQL", "Paymongo", "Stripe", "Amazon S3"],
        links: [
          {
            type: "Website",
            href: "https://skillings.io",
            icon: "Globe",
          },
        ],
        image: "https://picsum.photos/seed/skillings/800/400",
      },
      {
        title: "Class Scheduler",
        href: "#",
        dates: "2024",
        active: true,
        description:
          "Specialized automation tool built for the Frappe framework, designed to streamline academic resource management through an intelligent auto-scheduling engine.",
        technologies: ["Vue 3", "Frappe V15"],
        links: [],
        image: "https://picsum.photos/seed/scheduler/800/400",
      },
    ],
    personal: [
      {
        title: "Emanuscript",
        href: "https://userapp-caps.vercel.app/",
        dates: "2024",
        active: true,
        description:
          "Digital Archival Platform designed to automate the storage, management, and borrowing of unpublished manuscripts at Liceo de Cagayan University Library.",
        technologies: [],
        links: [
          {
            type: "Student App",
            href: "https://userapp-caps.vercel.app/",
            icon: "Globe",
          },
          {
            type: "Admin App",
            href: "https://liceo-manuscript-system.vercel.app/",
            icon: "Globe",
          },
          {
            type: "Documentation",
            href: "https://rb.gy/vwx7pt",
            icon: "FileText",
          },
        ],
        image: "https://picsum.photos/seed/emanuscript/800/400",
      },
      {
        title: "LesGo",
        href: "https://les-go-vite.vercel.app/",
        dates: "2024",
        active: true,
        description:
          "Digital Queuing System for USTP Cagayan de Oro's Registrar's Office to automate request management and document processing.",
        technologies: [],
        links: [
          {
            type: "Website",
            href: "https://les-go-vite.vercel.app/",
            icon: "Globe",
          },
        ],
        image: "https://picsum.photos/seed/lesgo/800/400",
      },
      {
        title: "Meridrops",
        href: "https://meridrops.vercel.app/",
        dates: "2023",
        active: true,
        description:
          "Custom, locally-hosted web application developed to streamline commercial print shop operations via an offline Wi-Fi portal.",
        technologies: ["Next.js", "TailwindCSS", "DrizzleORM", "PostgreSQL"],
        links: [
          {
            type: "Website",
            href: "https://meridrops.vercel.app/",
            icon: "Globe",
          },
          {
            type: "Source",
            href: "https://github.com/herveyyy/meridrops",
            icon: "Github",
          },
        ],
        image: "https://picsum.photos/seed/meridrops/800/400",
      },
      {
        title: "Drops",
        href: "https://github.com/herveyyy/Drops",
        dates: "2023",
        active: true,
        description: "Same idea of Meridrops but for everyone. A high-speed local file sharing solution.",
        technologies: ["Next.js", "TailwindCSS", "DrizzleORM", "PostgreSQL"],
        links: [
          {
            type: "Source",
            href: "https://github.com/herveyyy/Drops",
            icon: "Github",
          },
        ],
        image: "https://picsum.photos/seed/drops/800/400",
      },
      {
        title: "Lyn Store",
        href: "https://lyn-store.vercel.app/",
        dates: "2023",
        active: true,
        description:
          "Custom e-commerce application developed to digitize and streamline a specialized retail business for collectibles and figures.",
        technologies: ["Next.js", "TailwindCSS", "DrizzleORM", "PostgreSQL"],
        links: [
          {
            type: "Website",
            href: "https://lyn-store.vercel.app/",
            icon: "Globe",
          },
        ],
        image: "https://picsum.photos/seed/lynstore/800/400",
      },
      {
        title: "Herv.Web",
        href: "https://herv-web.vercel.app/",
        dates: "2024",
        active: true,
        description:
          "Specialized engineering service helping independent founders transition from basic websites to fully automated Web Application Systems.",
        technologies: ["Next.js", "TailwindCSS", "Serverless", "PostgreSQL"],
        links: [
          {
            type: "Website",
            href: "https://herv-web.vercel.app/",
            icon: "Globe",
          },
        ],
        image: "https://picsum.photos/seed/hervweb/800/400",
      },
      {
        title: "Unified Agent Engine",
        href: "https://github.com/herveyyy/ai-slaves",
        dates: "2024",
        active: true,
        description:
          "High-performance, framework-less agentic system orchestrating specialized LLM Personas via a custom Workflow Orchestrator.",
        technologies: ["Bun", "Drizzle ORM", "Gemini API"],
        links: [
          {
            type: "Source",
            href: "https://github.com/herveyyy/ai-slaves",
            icon: "Github",
          },
          {
            type: "Documentation",
            href: "https://docs.google.com/document/d/1YvMm8zMn_acIRDhWDVKz_74rvmZnfb8OvhRCHYXbUS0/edit?usp=sharing",
            icon: "FileText",
          },
        ],
        image: "https://picsum.photos/seed/agent/800/400",
      },
      {
        title: "Menu System",
        href: "#",
        dates: "2023",
        active: true,
        description:
          "Digital menu system for cafes and restaurants to replace traditional menus with a mobile or tablet-based solution.",
        technologies: [],
        links: [
          {
            type: "Documentation",
            href: "https://rb.gy/8mfkf2",
            icon: "FileText",
          },
        ],
        image: "https://picsum.photos/seed/menu/800/400",
      },
      {
        title: "Player Shop System",
        href: "#",
        dates: "2023",
        active: true,
        description:
          "Online economy system for Moonlighter where players can set their own prices and interact with others.",
        technologies: [],
        links: [
          {
            type: "Documentation",
            href: "https://rb.gy/mjad7k",
            icon: "FileText",
          },
        ],
        image: "https://picsum.photos/seed/playershop/800/400",
      },
      {
        title: "Sales Monitor & Inventory",
        href: "#",
        dates: "2023",
        active: true,
        description:
          "Management system for Cherry Store franchise to improve inventory management and customer transactions.",
        technologies: [],
        links: [
          {
            type: "Documentation",
            href: "https://rb.gy/wlhchr",
            icon: "FileText",
          },
        ],
        image: "https://picsum.photos/seed/inventory/800/400",
      },
      {
        title: "Shadcn-Next-Drizzle-Turborepo",
        href: "https://github.com/herveyyy/shadnextnest-in-turbo",
        dates: "2024",
        active: true,
        description:
          "High-performance monorepo template designed for rapid full-stack development with Next.js and NestJS.",
        technologies: ["Next.js", "NestJS", "TailwindCSS", "DrizzleORM", "Turborepo"],
        links: [
          {
            type: "Source",
            href: "https://github.com/herveyyy/shadnextnest-in-turbo",
            icon: "Github",
          },
        ],
        image: "https://picsum.photos/seed/turbo/800/400",
      },
      {
        title: "Iamherveyyy Portfolio",
        href: "https://iamhervey.vercel.app",
        dates: "2024",
        active: true,
        description: "Personal portfolio application showcasing projects and skills.",
        technologies: [],
        links: [
          {
            type: "Website",
            href: "https://iamhervey.vercel.app",
            icon: "Globe",
          },
        ],
        image: "https://picsum.photos/seed/portfolio/800/400",
      },
    ],
  },
};
