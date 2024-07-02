import { useState } from 'react';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/k-logo.png";
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative bg-black">
            <div className="container px-5 lg:mx-auto flex justify-between items-center">
                <Link to="/">
                    <img className="lg:size-40 size-28 lg:ml-0 -ml-5" src={logo} alt="logo" />
                </Link>
                <div>
                    <button className="text-4xl text-white" onClick={handleToggle}>
                        <HiOutlineBars3BottomRight />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div
                    data-aos="slide-left"
                    data-aos-duration="1000"
                    className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
                    <button className="text-5xl text-black absolute top-[20px] right-4 lg:top-[54px] lg:right-[79px]" onClick={handleToggle}>
                        <IoClose />
                    </button>
                    <nav className="league-spartan flex flex-col gap-8 text-black font-bold lg:text-6xl text-5xl uppercase">
                        <Link
                            data-aos="slide-left"
                            data-aos-easing="ease-in-out"
                            data-aos-delay="100"
                            data-aos-duration="300"
                            to="/"
                            className={`hover:line-through ${location.pathname === '/' ? 'line-through' : ''}`}
                        >
                            Home
                        </Link>
                        <Link
                            data-aos="slide-left"
                            data-aos-easing="ease-in-out"
                            data-aos-delay="200"
                            data-aos-duration="500"
                            to="/about"
                            className={`hover:line-through ${location.pathname === '/about' ? 'line-through' : ''}`}
                        >
                            About
                        </Link>
                        <Link
                            data-aos="slide-left"
                            data-aos-easing="ease-in-out"
                            data-aos-delay="300"
                            data-aos-duration="700"
                            to="/projects"
                            className={`hover:line-through ${location.pathname === '/projects' ? 'line-through' : ''}`}
                        >
                            Projects
                        </Link>
                        <Link
                            data-aos="slide-left"
                            data-aos-easing="ease-in-out"
                            data-aos-delay="500"
                            data-aos-duration="900"
                            to="/contact"
                            className={`hover:line-through ${location.pathname === '/contact' ? 'line-through' : ''}`}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Navbar;
