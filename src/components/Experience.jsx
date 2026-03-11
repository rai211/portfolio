import { EXPERIENCES } from "../constants/index";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const calculateDuration = (start, end) => {
  const startDate = new Date(start + " 1");
  const endDate = end === "Present" ? new Date() : new Date(end + " 1");

  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  if (months < 0) return "";

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  let result = "";

  if (years > 0) {
    result += `${years} yr${years > 1 ? "s" : ""}`;
  }

  if (remainingMonths > 0) {
    if (result) result += " ";
    result += `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
  }

  return result;
};

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 relative">

      <h1 className="my-20 text-center text-4xl">Experience</h1>

      {/* Timeline vertical line */}
      <div className="absolute left-[42%] top-40 h-[86%] w-[2px] bg-neutral-800"></div>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-14 flex flex-wrap items-start lg:justify-center relative"
          >

            {/* Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 pr-6"
            >
              <p className="mb-2 text-sm text-neutral-400 flex items-center gap-2">
                <FaCalendarAlt className="text-purple-500 text-xs" />
                {experience.year}

                <span className="text-white">
                  · {calculateDuration(experience.startDate, experience.endDate)}
                </span>
              </p>
            </motion.div>

            {/* Timeline Dot */}
            <div className="absolute left-[42%] translate-x-[-50%] mt-2 flex items-center justify-center">

              {experience.endDate === "Present" && (
                <span className="absolute inline-flex h-6 w-6 rounded-full bg-purple-500 opacity-75 animate-ping"></span>
              )}

              <span className="relative w-4 h-4 bg-purple-500 rounded-full border-4 border-neutral-950 shadow-[0_0_10px_#a855f7]"></span>

            </div>

            {/* Card */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 pl-10"
            >
              <div
                className={`rounded-xl p-6 border transition-all duration-300
                ${
                  experience.endDate === "Present"
                    ? "bg-neutral-900/80 border-purple-500/40 shadow-lg shadow-purple-500/20"
                    : "bg-neutral-900/70 border-neutral-800 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10"
                }`}
              >

                {/* Logo + Role + Company */}
                <div className="flex items-center gap-3 mb-4">

                  {experience.logo && (
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className="w-10 h-10 rounded-md object-contain bg-neutral-800 p-1"
                    />
                  )}

                  <div>
                    <h6 className="font-semibold text-white">
                      {experience.role}
                    </h6>

                    <p className="text-sm text-purple-300">
                      {experience.company}
                    </p>
                  </div>

                </div>

                {/* Description */}
                {Array.isArray(experience.description) ? (
                  <ul className="list-disc pl-5 space-y-2 text-neutral-400 text-sm">
                    {experience.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mb-4 text-neutral-400 text-sm leading-relaxed">
                    {experience.description}
                  </p>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-md bg-neutral-800 px-3 py-1 text-xs font-medium text-purple-400 border border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Experience;