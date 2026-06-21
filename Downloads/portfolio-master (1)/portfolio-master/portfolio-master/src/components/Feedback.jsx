// import { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";

// const Feedback = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const formRef = useRef(null);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const service_id = "service_670p90m";
//     const template_id = "template_99cq8g8";
//     const user_id = "CGYE26ojuQ-VaMl0q";

//     const templateParamas = {
//       name: formData.name,
//       email: formData.email,
//       to_name: "Nikita Rai",
//       message: formData.message,
//     };

//     try {
//       const response = await emailjs.send(
//         service_id,
//         template_id,
//         templateParamas,
//         user_id,
//       );
//       if (response.status === 200) {
//         alert("Feedback sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//         formRef.current.reset();
//       } else {
//         alert("Failed to send feedback. Please try again later.");
//       }
//     } catch (error) {
//       console.error("Error sending feedback:", error);
//       alert("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <div className="flex flex-col h-full">
//       <h2 className="text-2xl text-white mb-8 text-center">Send Feedback</h2>

//       <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           className="w-full bg-neutral-800 border border-neutral-700 p-3 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500"
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           className="w-full bg-neutral-800 border border-neutral-700 p-3 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500"
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="message"
//           placeholder="Your Message"
//           className="w-full bg-neutral-800 border border-neutral-700 p-3 rounded-lg text-white placeholder-neutral-400 h-32 focus:outline-none focus:border-purple-500"
//           onChange={handleChange}
//           required
//         />

//        <div className="flex justify-center pt-4">
//   <button
//     type="submit"
//     className="px-12 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-medium rounded-lg transition duration-300"
//   >
//     Submit
//   </button>
// </div>
//       </form>
//     </div>
//   );
// };

// export default Feedback;

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Feedback = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      name: formData.name,
      email: formData.email,
      to_name: "Nikita Rai",
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        "service_670p90m",
        "template_99cq8g8",
        templateParams,
        "CGYE26ojuQ-VaMl0q"
      );
      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        formRef.current.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending feedback:", error);
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">

        {/* Name */}
        <div className="flex flex-col gap-1">
          <label className="text-neutral-500 text-xs tracking-widest uppercase">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Nikita Rai"
            value={formData.name}
            className="w-full bg-neutral-800/80 border border-neutral-700 px-4 py-3 rounded-lg text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-purple-500/60 focus:bg-neutral-800 transition-all duration-200"
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-neutral-500 text-xs tracking-widest uppercase">Email</label>
          <input
            type="email"
            name="email"
            placeholder="hello@example.com"
            value={formData.email}
            className="w-full bg-neutral-800/80 border border-neutral-700 px-4 py-3 rounded-lg text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-purple-500/60 focus:bg-neutral-800 transition-all duration-200"
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-neutral-500 text-xs tracking-widest uppercase">Message</label>
          <textarea
            name="message"
            placeholder="Tell me about your project or opportunity..."
            value={formData.message}
            className="w-full flex-1 min-h-[130px] bg-neutral-800/80 border border-neutral-700 px-4 py-3 rounded-lg text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-purple-500/60 focus:bg-neutral-800 transition-all duration-200 resize-none"
            onChange={handleChange}
            required
          />
        </div>

        {/* Status message */}
        {status === "success" && (
          <p className="text-green-400 text-xs tracking-wide flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-xs tracking-wide flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
            Something went wrong. Please try again.
          </p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-3 mt-1 bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg shadow-purple-900/30 hover:shadow-purple-500/40"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

      </form>
    </div>
  );
};

export default Feedback;