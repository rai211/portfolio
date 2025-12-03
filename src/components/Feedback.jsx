import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const formRef = useRef(null);

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const service_id = 'service_670p90m';
    const template_id = 'template_99cq8g8';
    const user_id = 'CGYE26ojuQ-VaMl0q';

    const templateParamas = {
      name: formData.name,
      email: formData.email,
      to_name: 'Nikita Rai',
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        service_id,
        template_id,
        templateParamas,
        user_id
      );
      if (response.status === 200) {
        alert('Feedback sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
        formRef.current.reset()
      } else {
        alert('Failed to send feedback. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      alert('An error occurred. Please try again later.');
    }
  };
    
  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-md bg-white py-2 shadow-md z-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Send Feedback</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-2 rounded text-black"
          onChange={handleChange}
          required
        />
        <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded text-black"
            onChange={handleChange}
            required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-2 rounded h-32 text-black"
          onChange={handleChange}
          required
        />
        <div className="flex justify-center">
            <button
                type="submit"
                className="bg-blue-500 text-white px-20 py-2 rounded hover:bg-blue-600"
            >
                Send
            </button>
            </div>

      </form>
    </div>
  );
};

export default Feedback;
