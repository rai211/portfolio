import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        { id: 1, link: 'Home' },
        { id: 2, link: 'About' },
        { id: 3, link: 'Technologies' },
        { id: 4, link: 'Experience' },
        { id: 5, link: 'Project' },
        { id: 6, link: 'Contact' }
    ];

    const handleSmoothScroll = (e, link) => {
        e.preventDefault();
        const section = document.getElementById(link.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setNav(false); 
    };

    return (
        // <nav className="fixed w-full mb-20 flex items-center justify-start py-2 bg-black shadow-md z-10">
        <nav className="w-5/6 lg:px-7">
            <div >
                {/* <h1 className="text-4xl font-signature ml-2 bg-black">nr</h1> */}
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                        onClick={(e) => handleSmoothScroll(e, link)}
                    >
                        {link}
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b 
                from-black to-gray-800 text-gray-500'>
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-3xl"
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
