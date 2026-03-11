import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import delivery from "../assets/projects/deliverycentric.jpg"
import tibil from "../assets/projects/tibil.png";
import arteria from "../assets/projects/arteria.png"
import proco from "../assets/projects/proco.webp"

export const HERO_CONTENT = `Backend-focused full stack developer with 3.5+ years of experience building scalable web applications, REST APIs, and microservices. I specialize in Node.js, Express.js, PostgreSQL, and MySQL, with strong experience in backend architecture, authentication systems, and performance optimization.Along with backend development, I work with React and Next.js to build modern web interfaces. I also have experience deploying and managing applications on AWS using Docker and cloud-based DevOps practices.`;

 export const ABOUT_TEXT = `I am a backend-focused full stack developer with 3.5+ years of experience designing and building scalable web applications and distributed systems. My core expertise lies in developing REST APIs, microservices, and backend services using Node.js, NestJS, PostgreSQL, MySQL, and MongoDB.

I have worked on building secure authentication systems using Keycloak and JWT, designing microservices-based architectures, and optimizing database queries for better performance and reliability.

In addition to backend development, I have experience working with React and Next.js to build responsive user interfaces. I also work with AWS and Docker to deploy and manage applications using modern DevOps practices.

I enjoy solving complex backend problems, improving system performance, and building reliable systems that scale in real-world production environments.`;

export const EXPERIENCES = [
  {
    startDate: "July 2025",
    endDate: "Present",
  year: "Jul 2025 – Present",
  role: "Associate Backend Developer",
  company: "Delivery Centric Technology Services Pvt Ltd",
  logo: delivery,
  description: [
            "Developed scalable backend services using microservices architecture.",
            "Built RESTful APIs using Node.js and Express.js.",
            "Optimized PostgreSQL and MongoDB queries.",
            "Implemented validation layers and structured logging.",
            "Developed multi-exchange trading features for the Coincentric platform.",
            "Deployed backend services on AWS EC2 and S3."
          ],
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
    startDate: "December 2023",
    endDate: "November 2024",
    year: "Dec 2023 - Nov 2024",
    role: "Backend Developer",
    company: "Tibil Solutions",
    logo: tibil,
    description: `I utilized the Beckn Application Protocol (BAP) and Beckn Provider Protocol (BPP) for seamless interactions between seekers and providers. I handled search request validation through gateways, ensuring domain existence before routing to the BPP. Additionally, I collaborated with DASH on job search operations, querying databases and routing data back efficiently. I streamlined data flow between BPP and BAP to enhance communication efficiency and data accuracy.`,
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Keycloak", "Microservices", "JWT", "RESTful APIs", "JSON", "Git"],
  },
  {
    startDate: "August 2023",
    endDate: "November 2023",
    year: "Aug 2023 – Nov 2023",
    role: "SAP-UI5 Developer",
    logo: arteria,
    company: "Arteria Technologies Pvt Ltd",
    description: `Designed and developed user interfaces for web applications using HTML, CSS, JavaScript, jQuery, and CSS, ensuring an intuitive and responsive design. Implemented features for uploading data from Excel sheets and downloading data in .xlsx format, optimizing data management processes. Developed an efficient invoice generation system to improve operational workflow and data accuracy.`,
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
   },
 {
  startDate: "January 2022",
  endDate: "August 2023",
  year: "Jan 2022 - Aug 2023",
  role: "Backend Developer",
  company: "Procohort Technology Pvt Ltd",
  logo: proco,
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
