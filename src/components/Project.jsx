import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-800 pb-20">

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-thin tracking-tight text-white"
      >
        My <span className="text-neutral-500">Projects</span>
      </motion.h2>

      <div className="w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="flex flex-row bg-neutral-900/60 border border-neutral-800 rounded-xl
              overflow-hidden hover:border-purple-500/40 hover:shadow-lg
              hover:shadow-purple-500/10 transition-all duration-300"
          >

            {/* LEFT — Image */}
            <div className="w-32 min-w-32 lg:w-36 lg:min-w-36 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* RIGHT — Content */}
            <div className="flex flex-col justify-between flex-1 gap-3 p-4">

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-purple-500/60 text-xs font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="w-5 h-px bg-purple-500/30" />
                  <h3 className="text-sm font-semibold text-white leading-snug">
                    {project.title}
                  </h3>
                </div>

                <p className="text-neutral-400 text-xs leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-neutral-800 px-2 py-0.5 text-xs font-medium
                      text-purple-400 border border-neutral-700
                      hover:border-purple-500/50 hover:text-purple-300 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Project;