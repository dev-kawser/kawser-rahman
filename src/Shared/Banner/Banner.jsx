/* eslint-disable react/prop-types */
import './banner.css'
import Navbar from "../Navbar/Navbar.jsx"

const Banner = ({ h1, h3 }) => {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar></Navbar>
            <div className="pt-44 flex flex-col gap-3 items-center">
                <h1 data-aos="zoom-in" data-aos-delay="700" data-aos-easing="ease-in-out"  data-aos-duration="500" className="lg:text-8xl text-6xl text-center uppercase league">
                    {h1}
                </h1>
                <h3 data-aos="fade-up" data-aos-delay="900" data-aos-easing="ease-in-out"  data-aos-duration="700" className="lg:text-3xl text-spacing font-light uppercase league-spartan">
                    {h3}
                </h3>
            </div>
        </div>
    );
};

export default Banner;