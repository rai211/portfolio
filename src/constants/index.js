import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1.5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and PostgreSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

 export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. With 1.5 years of professional experience, I have worked with various technologies, including React, Next.js, Node.js, NestJS, MySQL, PostgreSQL, MongoDB, Keycloak, and microservices architecture. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "December 2023 - Present",
    role: "Backend Developer",
    company: "Tibil Solutions",
    description: `I utilized the Beckn Application Protocol (BAP) and Beckn Provider Protocol (BPP) for seamless interactions between seekers and providers. I handled search request validation through gateways, ensuring domain existence before routing to the BPP. Additionally, I collaborated with DASH on job search operations, querying databases and routing data back efficiently. I streamlined data flow between BPP and BAP to enhance communication efficiency and data accuracy.`,
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Keyclaok"],
  },
  {
    year: "August 2023 – November 2023",
    role: "SAP-UI5 Developer",
    company: "Arteria Technologies",
    description: `Designed and developed user interfaces for web applications using HTML, CSS, JavaScript, jQuery, and CSS, ensuring an intuitive and responsive design. Implemented features for uploading data from Excel sheets and downloading data in .xlsx format, optimizing data management processes. Developed an efficient invoice generation system to improve operational workflow and data accuracy.`,
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
   }
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
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
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "React", "JavaScript"],
  }
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Doom Dooma Tinsukia, Assam",
  phoneNo: "6003557715",
  email: "rainikita3007@gmail.com",
};
