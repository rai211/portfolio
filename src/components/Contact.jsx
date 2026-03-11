import { FaLinkedin, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";
import Feedback from "./Feedback";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: <FaInstagram />, href: "https://instagram.com/yourusername", color: "text-pink-500", label: "Instagram" },
  { icon: <FaGithub />, href: "https://github.com/rai211", color: "text-white", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourprofile", color: "text-[#0077B5]", label: "LinkedIn" },
  { icon: <SiLeetcode />, href: "https://leetcode.com/yourusername", color: "text-yellow-400", label: "LeetCode" },
];

const Contact = () => {
  return (
    <section className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-thin tracking-tight text-white"
      >
        Get in <span className="text-neutral-500">Touch</span>
      </motion.h2>

      <div className="w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

        {/* LEFT — Let's Connect */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6 }}
          className="relative bg-neutral-900/80 border border-neutral-800 rounded-xl p-10 flex flex-col gap-8 overflow-hidden"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <p className="text-purple-400 text-xs tracking-widest uppercase font-medium mb-1">Contact</p>
            <h3 className="text-white text-2xl font-light">Let's Connect</h3>
            <div className="w-10 h-px bg-gradient-to-r from-purple-500 to-transparent mt-3" />
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-3">
            
           <a href={`tel:${CONTACT.phoneNo}`}
              className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
            >
              <span className="p-2.5 bg-neutral-800 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-200">
                <FaPhone className="text-green-400 text-sm" />
              </span>
              <span className="text-sm tracking-wide">{CONTACT.phoneNo}</span>
            </a>

            
             <a href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
            >
              <span className="p-2.5 bg-neutral-800 rounded-lg group-hover:bg-purple-500/20 transition-colors duration-200">
                <HiOutlineMail className="text-red-400 text-base" />
              </span>
              <span className="text-sm tracking-wide">{CONTACT.email}</span>
            </a>
          </div>

          <div className="w-full h-px bg-neutral-800" />

          {/* Social icons */}
          <div>
            <p className="text-neutral-600 text-xs tracking-widest uppercase mb-4">Find me on</p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={s.label}
                  className={`p-3.5 bg-neutral-800 rounded-lg hover:bg-purple-500/20 border border-neutral-700 hover:border-purple-500/40 transition-all duration-200 text-xl ${s.color}`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 mt-auto">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-neutral-500 text-xs tracking-wide">Open to new opportunities</span>
          </div>
        </motion.div>

        {/* RIGHT — Feedback */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.6 }}
          className="relative bg-neutral-900/80 border border-neutral-800 rounded-xl p-10 flex flex-col overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="mb-6">
            <p className="text-purple-400 text-xs tracking-widest uppercase font-medium mb-1">Message</p>
            <h3 className="text-white text-2xl font-light">Send Feedback</h3>
            <div className="w-10 h-px bg-gradient-to-r from-purple-500 to-transparent mt-3" />
          </div>

          <Feedback />
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;