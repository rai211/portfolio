import aboutImage from "../assets/about_.jpeg";
import { ABOUT_TEXT } from "../constants/index";
import { motion } from "framer-motion";

const highlights = [
  { label: "Experience", value: "3.5+ Years" },
  { label: "Specialty", value: "Backend & APIs" },
  { label: "Cloud", value: "AWS & Docker" },
];

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">
      {/* Section Header */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-thin tracking-tight"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="w-5/6 mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 lg:gap-12 lg:justify-center">

        {/* LEFT — Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-5/12 lg:w-auto flex justify-center flex-shrink-0"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-purple-600 via-violet-500 to-pink-500 opacity-25 blur-sm" />
            <img
              src={aboutImage}
              alt="Nikita Rai"
              className="relative rounded-xl w-[270px] h-[320px] md:w-[280px] md:h-[360px] lg:w-[380px] lg:h-[460px] object-cover grayscale-[5%]"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-3 shadow-xl">
              <p className="text-purple-400 text-xs tracking-widest uppercase font-medium">Full Stack</p>
              <p className="text-white text-sm font-semibold">Node.js · AWS · React</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 80 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-7/12 lg:w-auto lg:max-w-xl flex flex-col gap-6"
        >
          {/* Stats row */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-purple-400 text-lg font-semibold">{item.value}</span>
                <span className="text-neutral-500 text-xs lg:text-sm tracking-widest uppercase">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-transparent" />

          {/* Bio text */}
          <p className="text-neutral-400 font-light leading-relaxed tracking-tight text-sm lg:text-lg border-l-2 border-purple-500/40 pl-4">
            {ABOUT_TEXT}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {["Node.js", "NestJS", "PostgreSQL", "MySQL", "MongoDB", "React", "Next.js", "AWS", "Docker", "Keycloak", "JWT"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs lg:text-sm rounded-full border border-neutral-700 text-neutral-400 bg-neutral-900/60 hover:border-purple-500/50 hover:text-purple-300 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;