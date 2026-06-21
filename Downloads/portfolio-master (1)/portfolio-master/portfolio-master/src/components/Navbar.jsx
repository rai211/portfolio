import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("Home");

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Technologies" },
    { id: 4, link: "Experience" },
    { id: 5, link: "Project" },
    { id: 6, link: "Contact" },
  ];

  const handleSmoothScroll = (e, link) => {
    e.preventDefault();
    const section = document.getElementById(link.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActive(link.toLowerCase());
    setNav(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <nav className="fixed top-0 w-full bg-black shadow-md z-50">
      <div className="w-5/6 mx-auto flex justify-between md:justify-center items-center h-16">
        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize font-medium transition-all duration-300
                            ${
                              active === link.toLowerCase()
                                ? "text-white scale-105"
                                : "text-gray-500 hover:text-white hover:scale-105"
                            }`}
              onClick={(e) => handleSmoothScroll(e, link)}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden ml-auto"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-40">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`px-4 py-6 text-2xl cursor-pointer capitalize font-medium transition-all duration-300
  ${
    active === link.toLowerCase()
      ? "text-white scale-105"
      : "text-gray-500 hover:text-white hover:scale-105"
  }`}
              onClick={(e) => handleSmoothScroll(e, link)}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
