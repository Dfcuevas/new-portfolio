import YcDirectory from "@/assets/images/Yc_directory.png";
import CarePulse from "@/assets/images/carePulse-img.png";
import TwitterCloneApp from "@/assets/images/twitter-clone.png";
import ChatApp from "@/assets/images/Chat-app.png";
import Signalist from "@/assets/images/signalist.png";

export const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2026",
    title: "Signalist Stock Tracker",
    results: [
      {
        title:
          "Signalist Stock Tracker is a high-performance Full-Stack platform designed for investment portfolio management and real-time stock data analysis. Architecturally, it is built following a Server Rendering (SSR) and Incremental Static Generation (ISR) pattern using Next.js, which optimizes both SEO and the loading speed of complex financial data.",
      },
      {
        title:
          "Unlike traditional applications that rely on complex background processes, this project uses Inngest. This allows you to define technical 'workflows' that are triggered by events (such as when a stock reaches a target price). It allows you to handle automatic retries, time delays and conditional steps declaratively, ensuring that no market alert is lost due to network failures.",
      },
      {
        title:
          "The system doesn't just display numbers; integrates AI capabilities to process earnings reports and financial news. Perform automated summaries, transforming raw stock market data into actionable information (actionable insights) for the end user through natural language processing.",
      },
    ],
    link: "https://signalist-stock-tracker-app-delta.vercel.app/",
    image: Signalist,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "YC Directory",
    results: [
      {
        title:
          "Developed a comprehensive startup directory platform with an intuitive and user-friendly interface for discovering and exploring startups.",
      },
      {
        title:
          "Built with a modern full-stack technology suite including Next.js 15, React 19, TailwindCSS for the frontend, Sanity CMS with GROQ for content management, NextAuth v5 with GitHub OAuth for authentication, Radix UI and Lucide Icons for UI components, Zod for validation, and Sentry for monitoring.",
      },
      {
        title:
          "Created a responsive design ensuring seamless user experience across all devices and screen sizes.",
      },
    ],
    link: "https://yc-directory-blue-one.vercel.app/",
    image: YcDirectory,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "CarePulse App",
    results: [
      {
        title:
          "Implemented a highly interactive frontend using NextJs and TailwindCSS, ensuring a fluid and modern user experience.",
      },
      {
        title:
          "Configured Appwrite to manage databases, storage, authentication, and messaging within the application, allowing for a robust and scalable backend integration.",
      },
      {
        title:
          "Used Twilio to implement automated SMS notifications, ensuring patients received real-time updates about their appointments.",
      },
    ],
    link: "https://carepulse-app.vercel.app/",
    image: CarePulse,
  },

  {
    company: "Personal Project",
    year: "2024",
    title: "X Clone App",
    results: [
      {
        title:
          "Developed the frontend using React, TailwindCSS, and DaisyUI, allowing for a visually appealing and highly customizable design. ",
      },
      {
        title:
          "Implemented state management with React Query and Zustand to streamline data handling and improve performance. ",
      },
      {
        title:
          "Secured routes on both the frontend and backend using jsonwebtoken (JWT), creating a middleware in Node.js and Express that ensured sensitive endpoints were protected.",
      },
      {
        title:
          "Used MongoDB with Mongoose to structure and validate user, post, and authentication data, achieving a secure and efficient database. ",
      },
    ],
    link: "https://twitter-clone-yb4p.onrender.com",
    image: TwitterCloneApp,
  },
  {
    company: "Personal project",
    year: "2024",
    title: "Chat App",
    results: [
      {
        title:
          "Project implemented with Typescript, TailwindCss, React, Prisma, PostgreSQL, NodeJs, Express and zustand for global state management.",
      },
      {
        title:
          "Thanks to Jsobwebtoken, user authentication and authorization were ensured so that they could register, login, logout and access the application safely.",
      },
      {
        title:
          "With Socket.io we implemented the bidirectional communication feature in our application.",
      },
    ],
    link: "https://chat-app-5ivw.onrender.com/",
    image: ChatApp,
  },
];
