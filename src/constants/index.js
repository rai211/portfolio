import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3.5+ years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

 export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. With 3.5+ years of professional experience, I have worked with various technologies, including React, Next.js, Node.js, NestJS, MySQL, PostgreSQL, MongoDB, Keycloak, and microservices architecture. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
  year: "July 2025 – Present",
  role: "Associate Backend Developer",
  company: "Delivery Centric",
  description: `At Delivery Centric, I work on building scalable backend services using microservices and clean architecture. I develop RESTful APIs, integrate Keycloak for authentication, and ensure secure communication between services. I optimize PostgreSQL and MongoDB queries, improve API performance, and contribute to reliable backend modules with proper validation and structured logging. I also worked on the Coincentric trading platform, developing multi-exchange trading features and the Copy Trader automation module. I designed exchange-integrated APIs and deployed services on AWS EC2 and S3 for high availability.`,
  technologies: [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Microservices",
    "Keycloak",
    "JWT",
    "RESTful APIs",
    "AWS EC2",
    "AWS S3",
    "Docker",
    "Git"
  ],
  },
  {
    year: "December 2023 - November 2024",
    role: "Backend Developer",
    company: "Tibil Solutions",
    description: `I utilized the Beckn Application Protocol (BAP) and Beckn Provider Protocol (BPP) for seamless interactions between seekers and providers. I handled search request validation through gateways, ensuring domain existence before routing to the BPP. Additionally, I collaborated with DASH on job search operations, querying databases and routing data back efficiently. I streamlined data flow between BPP and BAP to enhance communication efficiency and data accuracy.`,
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Keycloak", "Microservices", "JWT", "RESTful APIs", "JSON", "Git"],
  },
  {
    year: "August 2023 – November 2023",
    role: "SAP-UI5 Developer",
    company: "Arteria Technologies Pvt Ltd",
    description: `Designed and developed user interfaces for web applications using HTML, CSS, JavaScript, jQuery, and CSS, ensuring an intuitive and responsive design. Implemented features for uploading data from Excel sheets and downloading data in .xlsx format, optimizing data management processes. Developed an efficient invoice generation system to improve operational workflow and data accuracy.`,
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
   },
  {
    year: "January 2022 - August 2023",
    role: "Backend Developer",
    company: "Procohort Technology Pvt Ltd",
    description: `Designed and implemented robust backend services for a CRM system using Node.js and Express.js, ensuring efficient data processing, storage, and retrieval with PostgreSQL. Collaborated with frontend teams to deliver a seamless user experience and integrated RESTful APIs to support dynamic client interactions.`,
    technologies: ["Node.js", "Express.js", "PostgreSQL", "JavaScript", "RESTful APIs", "JSON", "Git"],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
  title: "Coincentric Trading Platform",
  image: project5,
  description:
    "Built backend services for a multi-exchange trading platform, enabling seamless trading across multiple crypto exchanges. Developed the Copy Trader module, automating trade execution for follower accounts based on lead trader activity. Implemented secure JWT-based authentication, optimized API performance, and ensured reliable communication between microservices. Deployed services on AWS EC2 and integrated S3 for secure data storage, improving the platform’s scalability and availability.",
  technologies: [
    "Node.js",
    "Express.js",
    "JWT",
    "MongoDB",
    "PostgreSQL",
    "RESTful APIs",
    "Microservices Architecture",
    "AWS EC2",
    "AWS S3"
  ],
},
  {
    title: "DASH",
    image: project1,
    description:
      "Developed APIs for various microservices in a SaaS solution called Dash, enhancing modularity and scalability. Designed and implemented features for job posting and listing, user registration, and comprehensive job management (creation, modification, and deactivation). Integrated Keycloak for authentication, ensuring secure access by validating tokens for all requests. Enhanced the platform’s functionality and user experience by implementing robust and secure microservices.",
    technologies: [ "Node.js", "Express.js", "Keycloak", "PostgreSQL", "RESTful APIs", "Microservices Architecture"],
  },
  {
    title: "User Management/Auth Functionality",
    image: project2,
    description:
      "Developed user-friendly authentication and profile management systems, utilizing JWT for secure data storage. Integrated Tailwind CSS for sleek and modern design, ensuring responsive and aesthetically pleasing interfaces. Implemented HTTP methods (Fetch, Post, Put, Delete) to enable seamless user experiences and efficient data handling. Created intuitive sign-in forms with username/email and password fields for secure access and profile editing.",
    technologies: ["React.js", "Node.js", "Express.js", "JWT", "Tailwind CSS"],
  },
  {
    title: "CRM",
    image: project4,
    description:
      "Built secure CRM authentication and profile management using JWT, bcrypt, and RESTful APIs. Integrated middleware like Helmet and CORS, ensuring robust validation, data protection, and seamless frontend interaction.",
    technologies: ["Node.js", "Express.js", "MySQL", "JavaScript", "RESTful APIs", "JSON", "Git"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "JavaScript"],
  },
  
];

export const CONTACT = {
  address: "Doom Dooma Tinsukia, Assam",
  phoneNo: "9678241162",
  email: "nikitarai2803@gmail.com",
};
