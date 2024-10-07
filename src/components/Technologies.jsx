import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs, FaGithub } from "react-icons/fa";         
import { SiPostgresql, SiMysql, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si"; 
import { animate, motion } from "framer-motion";


const iconvariable = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})
const Technologies = () =>{
    return <div className="border-b border-neutral-800 pb-24" >
    <h1
    // whileInView={{ opacity: 1, y: 0}}
    // initial={{ opacity: 0, y: -100}}
    // transition={{ duration: 1.5}}
     className="my-20 text-center text-4xl">Technologies</h1>
     <motion.div
      whileInView={{ opacity: 1, x: 0}}
      initial={{ opacity: 0, x: -100}}
      transition={{ duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
     
    <motion.div 
    variants={iconvariable(2.5)}
    initial="initial"
    animate="animate"
    className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400"/>
    </motion.div>
    <motion.div 
    variants={iconvariable(3)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaNodeJs className="text-7xl text-green-500"/>
    </motion.div>
    <motion.div 
    variants={iconvariable(5)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaGithub className="text-7xl text-darkgray-900"/>
    </motion.div>
    <motion.div 
    variants={iconvariable(4)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiPostgresql className="text-7xl text-blue-700"/>
    </motion.div>
    <motion.div 
    variants={iconvariable(7)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMysql className="text-7xl text-cyan-500"/>
    </motion.div>
    <motion.div 
    variants={iconvariable(8)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiJavascript className="text-7xl text-yellow-400"/>
    </motion.div>
    <motion.div 
    variants={iconvariable(9)}
    initial="initial"
    animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiHtml5 className="text-7xl text-orange-600"/>
    </motion.div>
    {/* <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiCss3 className="text-7xl text-blue-500"/>
    </div> */}
     </motion.div>
     <div>
</div>

    </div>
}
export default Technologies