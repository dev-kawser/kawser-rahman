/* eslint-disable react/prop-types */
import Navbar from "../Navbar/Navbar.jsx"
import animation from "../../assets/images/animation.json"
import Lottie from 'lottie-react';

const Banner = ({ h1, h3 }) => {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar></Navbar>
            <div className='flex lg:flex-row flex-col-reverse justify-between lg:justify-around items-center max-w-6xl mx-auto'>

                <div className="flex flex-col gap-3 items-center">
                    <h1 data-aos="zoom-in" data-aos-delay="700" data-aos-easing="ease-in-out" data-aos-duration="500" className="lg:text-8xl text-5xl text-center uppercase league">
                        {h1}
                    </h1>
                    <h3 data-aos="fade-up" data-aos-delay="900" data-aos-easing="ease-in-out" data-aos-duration="700" className="lg:text-2xl text-lg tracking-widest lg:tracking-[11.52px] font-light text-green-500 uppercase league-spartan">
                        {h3}
                    </h3>
                </div>

                <div
                    data-aos="zoom-in"
                    data-aos-delay="700"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="500"
                    className="lg:h-[500px] h-[380px] w-[380px] lg:w-[500px] lg:mt-0 -mt-20">
                    <Lottie animationData={animation} ></Lottie>
                </div>

            </div>
        </div>
    );
};

export default Banner;