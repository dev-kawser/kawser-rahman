import { Link } from "react-router-dom";
import logo from "../../assets/images/k-logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
    return (
        <div className="mt-20 lg:mt-28 bg-black text-white lg:min-h-[300px] min-h-52">
            <div className="container px-5 lg:mx-auto flex lg:flex-row flex-col justify-between items-center">
                <Link to="/">
                    <img className="lg:size-52 size-28" src={logo} alt="logo" />
                </Link>
                <div className="space-x-7 flex items-center text-xl lg:text-2xl league-spartan uppercase tracking-widest">
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/kawser-ferdous-safi/"><FaLinkedinIn />
                    </a>
                    <a
                        target="_blank"
                        href="https://github.com/dev-kawser"><BsGithub />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.facebook.com/kawserferdoussafi.03"><FaFacebookF />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/kawserferdoussafi_x"><FaInstagram />
                    </a>
                    <a
                        href="mailto:mdkawserferdoussafi@gmail.com"><MdOutlineMailOutline />
                    </a>
                </div>
            </div>
            <div className="mt-3">
                <hr />
            </div>
            <div className="mt-5 text-center roboto">
                <p>Copyright 2024. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;