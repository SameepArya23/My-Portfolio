import repolumeImg from "../assets/repolume.png";
import phantomscapeImg from "../assets/phantom.png";
import portfolioImg from "../assets/portfolio.png";

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

// export const projects: Project[] = [
//   {
//     id: "nebula-dashboard",
//     title: "Nebula Dashboard",
//     description: "Analytics platform for SaaS companies with real-time data visualization.",
//     longDescription: "A comprehensive analytics dashboard designed for modern SaaS businesses. Features real-time data streams, customizable widgets, and advanced filtering capabilities. Built with performance and scalability in mind.",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
//     tags: ["React", "TypeScript", "D3.js", "Tailwind CSS", "WebSocket"],
//     githubUrl: "https://github.com",
//     liveUrl: "https://example.com",
//     features: [
//       "Real-time data visualization with D3.js",
//       "Customizable dashboard widgets",
//       "Advanced filtering and search",
//       "Export to PDF/CSV",
//       "Dark mode support"
//     ],
//     architecture: [
//       "Micro-frontend architecture",
//       "WebSocket for real-time updates",
//       "Redis caching layer",
//       "PostgreSQL for data persistence"
//     ],
//     challenges: [
//       "Optimizing large dataset rendering",
//       "Implementing smooth real-time updates",
//       "Creating reusable chart components"
//     ],
//     color: "#8b5cf6"
//   },
//   {
//     id: "quantum-chat",
//     title: "Quantum Chat",
//     description: "AI-powered chat interface with natural language processing capabilities.",
//     longDescription: "An intelligent chat interface that leverages OpenAI's GPT models to provide contextual, helpful responses. Features conversation history, markdown support, and code syntax highlighting.",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
//     tags: ["Next.js", "OpenAI", "TypeScript", "Prisma", "PostgreSQL"],
//     githubUrl: "https://github.com",
//     liveUrl: "https://example.com",
//     features: [
//       "AI-powered responses",
//       "Conversation history",
//       "Markdown rendering",
//       "Code syntax highlighting",
//       "Export conversations"
//     ],
//     architecture: [
//       "Server-side rendering with Next.js",
//       "OpenAI API integration",
//       "Prisma ORM for database",
//       "Redis for session management"
//     ],
//     challenges: [
//       "Managing API rate limits",
//       "Streaming responses effectively",
//       "Handling long conversations"
//     ],
//     color: "#06b6d4"
//   },
//   {
//     id: "orbit-finance",
//     title: "Orbit Finance",
//     description: "Personal wealth tracking tool with investment portfolio management.",
//     longDescription: "A comprehensive personal finance application that helps users track expenses, manage budgets, and monitor investment portfolios. Features bank account integration and automated categorization.",
//     image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
//     tags: ["Vue.js", "Firebase", "TypeScript", "Chart.js", "Plaid API"],
//     githubUrl: "https://github.com",
//     liveUrl: "https://example.com",
//     features: [
//       "Expense tracking and categorization",
//       "Investment portfolio monitoring",
//       "Bank account integration",
//       "Budget planning tools",
//       "Financial reports and insights"
//     ],
//     architecture: [
//       "Vue 3 Composition API",
//       "Firebase Authentication",
//       "Firestore for real-time data",
//       "Plaid API for bank connections"
//     ],
//     challenges: [
//       "Secure handling of financial data",
//       "Real-time sync across devices",
//       "Complex calculation performance"
//     ],
//     color: "#10b981"
//   },
//   {
//     id: "vortex-social",
//     title: "Vortex Social",
//     description: "Community-driven content platform with real-time interactions.",
//     longDescription: "A modern social platform focused on community building and content sharing. Features real-time notifications, threaded discussions, and advanced content moderation tools.",
//     image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
//     tags: ["Remix", "Prisma", "PostgreSQL", "Redis", "WebSocket"],
//     githubUrl: "https://github.com",
//     liveUrl: "https://example.com",
//     features: [
//       "Real-time notifications",
//       "Threaded discussions",
//       "Content moderation",
//       "User mentions and tags",
//       "Rich text editor"
//     ],
//     architecture: [
//       "Remix framework for SSR",
//       "Prisma with PostgreSQL",
//       "Redis for caching",
//       "WebSocket for real-time features"
//     ],
//     challenges: [
//       "Scaling real-time features",
//       "Content moderation at scale",
//       "Optimistic UI updates"
//     ],
//     color: "#f43f5e"
//   }
// ];
export const projects: Project[] = [
  {
    id: "repolume",
    title: "Repolume",
    description:
      "AI-powered GitHub repository analyzer that explains architecture, structure, and functionality in seconds.",
    longDescription:
      "Repolume is an intelligent developer tool that analyzes public GitHub repositories and generates clear explanations of their architecture, folder structure, tech stack, and core functionality. It leverages LLM capabilities to simplify complex codebases, making onboarding, learning, and code reviews significantly faster.",
    image: repolumeImg, // Replace with your actual image
    tags: ["Next.js", "TypeScript", "OpenAI", "Node.js", "GitHub API"],
    githubUrl: "https://github.com/your-username/repolume",
    liveUrl: "https://your-live-url.com",
    features: [
      "Automated repository structure analysis",
      "AI-generated architecture explanation",
      "Tech stack detection",
      "Readable documentation summaries",
      "Fast processing of public repositories"
    ],
    architecture: [
      "Next.js frontend with API routes",
      "GitHub REST API integration",
      "LLM-based summarization layer",
      "Server-side processing pipeline"
    ],
    challenges: [
      "Handling large repositories efficiently",
      "Structuring prompts for accurate architectural explanations",
      "Managing API rate limits and response time"
    ],
    color: "#6366f1"
  },
  {
    id: "phantomscape-3d",
    title: "PhantomScape-3D",
    description:
      "Interactive 3D haunted outdoor scene built with Three.js featuring realistic lighting, textures, and environmental effects.",
    longDescription:
      "PhantomScape-3D is a visually immersive 3D web experience built using Three.js. It renders a realistic outdoor haunted environment with high-resolution textures, dynamic lighting, sky rendering, and interactive camera controls. The application supports real-time parameter tweaking for debugging and development optimization.",
    image: phantomscapeImg, // Replace with your actual image
    tags: ["Three.js", "JavaScript", "WebGL", "GLTF", "Dat.GUI"],
    githubUrl: "https://github.com/your-username/phantomscape-3d",
    liveUrl: "https://your-live-url.com",
    features: [
      "Realistic textured floor and materials",
      "Dynamic lighting and shadow system",
      "Sky and environmental effects",
      "Interactive camera controls",
      "Real-time debugging controls"
    ],
    architecture: [
      "Three.js scene graph structure",
      "Modular component-based scene setup",
      "Texture loader with high-resolution assets",
      "WebGL rendering pipeline"
    ],
    challenges: [
      "Optimizing performance with high-resolution textures",
      "Managing lighting and shadow realism",
      "Ensuring smooth interaction and camera controls"
    ],
    color: "#7c3aed"
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio",
    description:
      "Modern developer portfolio showcasing projects, technical skills, and interactive UI experiences.",
    longDescription:
      "A fully responsive and performance-optimized portfolio website built to showcase my projects, technical expertise, and interactive frontend capabilities. It includes smooth animations, project filtering, and a clean UI focused on user experience and clarity.",
    image: portfolioImg, // Replace with your actual image
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/your-username/portfolio",
    liveUrl: "https://your-live-url.com",
    features: [
      "Fully responsive design",
      "Smooth animations and transitions",
      "Dynamic project rendering",
      "SEO-friendly structure",
      "Modern UI/UX design"
    ],
    architecture: [
      "Component-based React architecture",
      "Reusable UI components",
      "Optimized asset loading",
      "Modular folder structure"
    ],
    challenges: [
      "Designing a unique but minimal UI",
      "Maintaining performance with animations",
      "Structuring scalable project data"
    ],
    color: "#0ea5e9"
  }
];