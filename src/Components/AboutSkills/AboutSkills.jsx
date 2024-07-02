import html from "../../assets/images/html.png"
import css from "../../assets/images/css.png"
import js from "../../assets/images/js.png"
import tailwind from "../../assets/images/tailwind.png"
import react from "../../assets/images/react.png"
import next from "../../assets/images/next.jpeg"
import firebase from "../../assets/images/firebase.png"
import node from "../../assets/images/node.png"
import mongo from "../../assets/images/mongo.png"
import express from "../../assets/images/express.png"
import vs from "../../assets/images/vsCode.jpeg"
import git from "../../assets/images/git.png"
import npm from "../../assets/images/npm.png"
import stripe from "../../assets/images/stripe.png"
import ts from "../../assets/images/ts.png"
import ssl from "../../assets/images/ssl.png"
import kawser from "../../assets/images/kawser.jpg"

const AboutSkills = () => {
    return (
        <div className="lg:max-w-2xl max-w-xl lg:mx-auto mx-3 mt-16 lg:mt-28">
            <div>
                <div className="flex items-center justify-center">
                    <img
                        className="rounded-full lg:w-[512px] w-72 border-2 p-2 bg-slate-500"
                        src={kawser} alt="kawser" />
                </div>
                <div className="lg:mt-16 mt-12">
                    <h4 className="league-spartan lg:text-left text-center text-3xl font-bold">About Me</h4>
                    <p className="roboto mt-2 text-lg">Aspiring Front-End Developer with nearly a year of intensive learning and practical experience in HTML, CSS, JavaScript, and React. Dedicated to crafting responsive, user-centric web applications and continuously exploring emerging technologies. Driven to contribute and grow within a dynamic, collaborative team environment.</p>
                </div>
                <div className="lg:mt-16 mt-12">
                    <h4 className="league-spartan lg:text-left text-center text-3xl font-bold">My Skills</h4>
                    <div className="roboto font-medium lg:ml-0 ml-8 mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 space-y-3">
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={html}
                                alt="" />
                            <p>HTML</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={css}
                                alt="" />
                            <p>CSS</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={js}
                                alt="" />
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={tailwind}
                                alt="" />
                            <p>TAILWIND</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={react}
                                alt="" />
                            <p>REACT JS</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={next}
                                alt="" />
                            <p>NEXT JS</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={firebase}
                                alt="" />
                            <p>FIREBASE</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={node}
                                alt="" />
                            <p>NODE JS</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={mongo}
                                alt="" />
                            <p>MONGO DB</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={express}
                                alt="" />
                            <p>EXPRESS</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={git}
                                alt="" />
                            <p>GIT</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={npm}
                                alt="" />
                            <p>NPM</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={stripe}
                                alt="" />
                            <p>STRIPE</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={ts}
                                alt="" />
                            <p>TYPESCRIPT</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={ssl}
                                alt="" />
                            <p>SSLCOMMERZ</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                data-aos="fade-in"
                                data-aos-easing="ease-in-out"
                                data-aos-delay="200"
                                className="size-10"
                                src={vs}
                                alt="" />
                            <p>VS CODE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSkills;