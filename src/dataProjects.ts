import dcstock from "@/assets/images/DCStock.png";
import CarePulse from "@/assets/images/carePulse-img.png";
import TwitterCloneApp from "@/assets/images/twitter-clone.png";
import ChatApp from "@/assets/images/Chat-app.png";

export const portfolioProjects = [
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
    company: "Personal project",
    year: "2024",
    title: "DCStock App",
    results: [
      {
        title:
          "Inventory management system developed with NextJs, Redux Toolkit, TailwindCss, NodeJs, Express, PostgreSQL and deployed on AWS.",
      },
      {
        title:
          "Features such as product filtering, sales graphs, costs, profits, user databases and a very complete and intuitive dashboard were implemented.",
      },
    ],
    link: "https://main.d2va3tidas9dgb.amplifyapp.com/dashboard",
    image: dcstock,
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
