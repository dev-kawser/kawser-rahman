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

                    <a data-aos="zoom-in" data-aos-delay="700" data-aos-easing="ease-in-out" data-aos-duration="500" href="resume.pdf" download="kawser-resume.pdf" >
                        <button className="lg:text-xl text-lg box-border border-4 border-sky-900 lg:w-48 lg:h-14 w-32 h-10 rounded-lg bg-sky-600 text-white relative group">
                            <span className="pr-8">Resume</span><span className="bg-sky-900 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300"><svg viewBox="0 0 24 24" fill="none" className="w-8 inline mx-auto" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                    </a>
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