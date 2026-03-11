import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FaInstagram />, href: "https://instagram.com/yourusername", label: "Instagram", color: "hover:text-pink-500" },
    { icon: <FaGithub />, href: "https://github.com/rai211", label: "GitHub", color: "hover:text-white" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn", color: "hover:text-[#0077B5]" },
    { icon: <SiLeetcode />, href: "https://leetcode.com/yourusername", label: "LeetCode", color: "hover:text-yellow-400" },
  ];

  return (
    <footer className="border-t border-neutral-800 pt-12 pb-8">
      <div className="w-5/6 mx-auto flex flex-col gap-10">

        {/* Top row */}
        {/* <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        </div> */}

        {/* Divider */}
        {/* <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" /> */}

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3 text-xs text-neutral-600">
          <p>© {currentYear} Nikita Rai. All rights reserved.</p>
          <p className="tracking-wide">
            Built with{" "}
            <span className="text-purple-500">React</span>
            {" & "}
            <span className="text-purple-500">Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;