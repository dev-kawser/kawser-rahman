import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import logo from "../../assets/images/k-logo.jpeg"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-black">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <img className="size-28" src={logo} alt="logo" />
                </Link>
                <div>
                    <button className="text-4xl text-white">
                        <HiOutlineBars3BottomRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;