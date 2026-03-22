import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 xl:px-40 lg:px-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col bg-neutral-900/70 border border-neutral-800 rounded-2xl overflow-hidden hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
          >
            {/* Top - Image */}
            <div className="w-full h-64 overflow-hidden border-b border-neutral-800/50">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom - Content */}
            <div className="flex flex-col flex-1 p-6">
              <h6 className="font-semibold text-white text-xl mb-3">
                {project.title}
              </h6>

              <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-purple-300 border border-neutral-700 hover:border-purple-500/50 transition-colors"
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