import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { CONTACT } from "../constants/index";

const Links = [
  {
    id: 1,
    icon: <FaLinkedin className="text-7xl text-[#0077B5]" size={40} />,
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    style: "rounded-[2px]",
  },
  {
    id: 2,
    icon: <FaGithub className="text-7xl text-darkgray-900" size={40} />,
    name: "GitHub",
    href: "https://www.github.com/rai211",
    style: "rounded-[2px]",
  },
  {
    id: 3,
    icon: <HiOutlineMail className="text-7xl text-[#EA4335]" size={40} />,
    name: "Mail",
    href: "mailto:nikitarai2803@gmail.com",
    style: "rounded-[2px]",
  },
  {
    id: 4,
    icon: <BsFillPersonLinesFill className="text-7xl text-[#1E3A8A]" size={40} />,
    name: "Resume",
    href: "/Nikita_Rai_Resume.pdf",
    style: "rounded-[2px]",
    download: true,
  },
];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.email}
        </motion.p>
        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-4">
          {Links.map(({ id, icon, name, href, style, download }) => (
            <motion.a
              key={id}
              href={href}
              download={download}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`group relative flex items-center justify-center w-20 h-14 px-4 py-2 bg-gray-200 text-black hover:bg-gray-300 ${style}`}
            >
              <span className="transition-opacity duration-200 opacity-100 group-hover:opacity-0">
                {icon}
              </span>
              <span className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                {name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
      {/* Feedback Form */}
      {/* <div className="mt-10">
        <h2 className="text-2xl text-center mb-4">Leave Your Feedback</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96 mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name" // Added placeholder
              className="border rounded w-full py-2 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email" // Added placeholder
              className="border rounded w-full py-2 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-gray-700 mb-1">Feedback</label>
            <textarea
              id="feedback"
              placeholder="Your Feedback" // Added placeholder
              className="border rounded w-full py-2 px-3 text-gray-700"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default Contact;
