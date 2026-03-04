export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
  architecture: string[];
  challenges: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: "nebula-dashboard",
    title: "Nebula Dashboard",
    description: "Analytics platform for SaaS companies with real-time data visualization.",
    longDescription: "A comprehensive analytics dashboard designed for modern SaaS businesses. Features real-time data streams, customizable widgets, and advanced filtering capabilities. Built with performance and scalability in mind.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "D3.js", "Tailwind CSS", "WebSocket"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: [
      "Real-time data visualization with D3.js",
      "Customizable dashboard widgets",
      "Advanced filtering and search",
      "Export to PDF/CSV",
      "Dark mode support"
    ],
    architecture: [
      "Micro-frontend architecture",
      "WebSocket for real-time updates",
      "Redis caching layer",
      "PostgreSQL for data persistence"
    ],
    challenges: [
      "Optimizing large dataset rendering",
      "Implementing smooth real-time updates",
      "Creating reusable chart components"
    ],
    color: "#8b5cf6"
  },
  {
    id: "quantum-chat",
    title: "Quantum Chat",
    description: "AI-powered chat interface with natural language processing capabilities.",
    longDescription: "An intelligent chat interface that leverages OpenAI's GPT models to provide contextual, helpful responses. Features conversation history, markdown support, and code syntax highlighting.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Next.js", "OpenAI", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: [
      "AI-powered responses",
      "Conversation history",
      "Markdown rendering",
      "Code syntax highlighting",
      "Export conversations"
    ],
    architecture: [
      "Server-side rendering with Next.js",
      "OpenAI API integration",
      "Prisma ORM for database",
      "Redis for session management"
    ],
    challenges: [
      "Managing API rate limits",
      "Streaming responses effectively",
      "Handling long conversations"
    ],
    color: "#06b6d4"
  },
  {
    id: "orbit-finance",
    title: "Orbit Finance",
    description: "Personal wealth tracking tool with investment portfolio management.",
    longDescription: "A comprehensive personal finance application that helps users track expenses, manage budgets, and monitor investment portfolios. Features bank account integration and automated categorization.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Firebase", "TypeScript", "Chart.js", "Plaid API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: [
      "Expense tracking and categorization",
      "Investment portfolio monitoring",
      "Bank account integration",
      "Budget planning tools",
      "Financial reports and insights"
    ],
    architecture: [
      "Vue 3 Composition API",
      "Firebase Authentication",
      "Firestore for real-time data",
      "Plaid API for bank connections"
    ],
    challenges: [
      "Secure handling of financial data",
      "Real-time sync across devices",
      "Complex calculation performance"
    ],
    color: "#10b981"
  },
  {
    id: "vortex-social",
    title: "Vortex Social",
    description: "Community-driven content platform with real-time interactions.",
    longDescription: "A modern social platform focused on community building and content sharing. Features real-time notifications, threaded discussions, and advanced content moderation tools.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["Remix", "Prisma", "PostgreSQL", "Redis", "WebSocket"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: [
      "Real-time notifications",
      "Threaded discussions",
      "Content moderation",
      "User mentions and tags",
      "Rich text editor"
    ],
    architecture: [
      "Remix framework for SSR",
      "Prisma with PostgreSQL",
      "Redis for caching",
      "WebSocket for real-time features"
    ],
    challenges: [
      "Scaling real-time features",
      "Content moderation at scale",
      "Optimistic UI updates"
    ],
    color: "#f43f5e"
  }
];
