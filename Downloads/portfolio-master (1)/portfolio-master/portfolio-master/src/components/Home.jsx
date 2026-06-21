import { HERO_CONTENT } from "../constants/index";
import ProfilePic from "../assets/ProfilePic.jpeg";
import { motion } from "framer-motion";
// import ViewCounter from "./ViewCounter";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="w-5/6 border-b border-neutral-800 pb-16 lg:mb-35 mx-auto">
      <div className="flex flex-col md:flex-row items-center lg:justify-center gap-12 lg:gap-12 pt-10">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 lg:w-auto flex flex-col justify-center">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-4 text-4xl font-thin tracking-tight mt-5 lg:text-6xl text-white"
          >
            Nikita Rai
          </motion.h1>

          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-400 via-violet-400 to-purple-500 bg-clip-text text-xl lg:text-3xl tracking-tight text-transparent font-medium pb-2"
          >
            Backend-Focused Full Stack Developer
          </motion.span>

          <motion.span
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="text-neutral-400 text-sm lg:text-lg tracking-widest uppercase font-light pb-4"
          >
            Node.js &nbsp;·&nbsp; Cloud &nbsp;·&nbsp; DevOps
          </motion.span>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="max-w-xl py-4 font-light tracking-tight text-neutral-400 leading-relaxed text-sm lg:text-lg border-l-2 border-purple-500/40 pl-4"
          >
            {HERO_CONTENT}
          </motion.p>

          {/* Resume Button — right below content */}
          <motion.div
            variants={container(1.3)}
            initial="hidden"
            animate="visible"
            className="mt-6 flex items-center gap-4"
          >
            <motion.a
              href="/Nikita_Rai_Resume.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-purple-600 to-violet-500 text-white text-sm font-medium rounded-lg overflow-hidden shadow-lg shadow-purple-900/40 transition-all duration-300 hover:shadow-purple-500/50 hover:shadow-xl"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg
                className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </motion.a>

            {/* <span className="text-neutral-600 text-xs tracking-widest">PDF · 2025</span> */}
          </motion.div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full md:w-1/2 lg:w-auto flex justify-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative"
          >
            {/* Decorative ring */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-purple-600 via-violet-500 to-pink-500 opacity-30 blur-sm" />
            <motion.img
              src={ProfilePic}
              alt="Nikita Rai"
              className="relative rounded-xl lg:w-[400px] w-[260px] lg:h-[500px] h-[340px] object-cover grayscale-[10%]"
            />
            {/* Subtle corner tag */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-md px-3 py-1.5 text-xs text-neutral-300 tracking-wide">
              3 yrs exp
            </div>
          </motion.div>
        </div>

      </div>

      {/* <ViewCounter /> */}
    </div>
  );
};

export default Hero;