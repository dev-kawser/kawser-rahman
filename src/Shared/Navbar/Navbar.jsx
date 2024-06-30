import { useState } from 'react';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../../assets/images/k-logo.png";
import { IoClose } from 'react-icons/io5';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative bg-black">
            <div className="container px-5 lg:mx-auto flex justify-between items-center">
                <Link to="/">
                    <img className="lg:size-40 size-24" src={logo} alt="logo" />
                </Link>
                <div>
                    <button className="text-4xl text-white" onClick={handleToggle}>
                        <HiOutlineBars3BottomRight />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div>
                    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
                        <button className="text-5xl text-black absolute top-[20px] right-4 lg:top-[54px] lg:right-[79px]" onClick={handleToggle}>
                            <IoClose />
                        </button>
                        <nav className="league-spartan flex flex-col gap-8 text-black font-bold lg:text-6xl text-5xl uppercase">
                            <Link data-aos="fade-up" data-aos-delay="300" to="/">Home</Link>
                            <Link data-aos="fade-up" data-aos-delay="500" to="/about">About</Link>
                            <Link data-aos="fade-up" data-aos-delay="700" to="/projects">Projects</Link>
                            <Link data-aos="fade-up" data-aos-delay="900" to="/contact">Contact</Link>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
