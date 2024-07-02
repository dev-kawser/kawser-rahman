import { Link } from "react-router-dom";
import Banner from "../../Shared/Banner/Banner.jsx";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
    return (
        <div>
            <Banner
                h1={"ABOUT ME"}
                h3={"IT’S A-ME, KAWSER!"}
            ></Banner>

            <div className="lg:max-w-2xl max-w-xl lg:mx-auto mx-3 mt-20 lg:mt-28">
                <div>
                    <div>
                        <h4 className="league-spartan lg:text-left text-center text-3xl font-bold">My Background</h4>
                        <p className="roboto mt-2 text-lg">
                            I am a dedicated Front-End Developer with nearly a year of intensive learning and practical experience. My journey began with HTML, CSS, and JavaScript, and I have since developed a strong proficiency in React. I am passionate about crafting responsive, user-centric web applications that are both functional and aesthetically pleasing. I thrive in dynamic, collaborative team environments and am constantly seeking opportunities to learn and grow. My commitment to continuous learning has led me to explore emerging technologies and best practices in web development, ensuring that I stay at the forefront of the industry.
                        </p>
                    </div>
                    <div>
                        <h4 className="league-spartan lg:text-left text-center text-3xl font-bold mt-16">My Education</h4>
                        <p className="roboto mt-2 text-lg">
                            I am a driven and results-oriented student currently pursuing a Diploma in Computer Science and Technology (CST) since 2022. Prior to this, I successfully completed my Secondary School Certificate (SSC) in 2020. My passion for web development led me to further my skills at Programming Hero Institute, demonstrating my commitment to continuous learning.
                        </p>
                    </div>
                    <div className="mt-16">
                        <h4 className="league-spartan lg:text-left text-center text-3xl font-bold">My Goals and Interests</h4>
                        <p className="roboto mt-2 text-lg">
                            My primary goal is to master Next.js, achieving a deep understanding of server-side rendering, static site generation, and API routes. I aim to build a portfolio of projects showcasing my Next.js skills. Additionally, I am dedicated to becoming proficient in GSAP, Three.js, and Framer Motion to create visually appealing and interactive web applications, integrating advanced animations and 3D graphics into my projects.
                            <br /><br />
                            Learning TypeScript and Redux is another goal, where I aim to write more reliable and maintainable code and efficiently manage state in complex React applications. I also plan to expand into backend development, focusing on Node.js, Express.js, and MongoDB to build robust and scalable server-side applications. Building real-world projects that solve practical problems and contributing to open-source projects to collaborate with other developers are key objectives.
                            <br /><br />
                            Staying updated with industry trends is vital. I continuously learn about new tools, technologies, and best practices in web development, attending conferences, participating in webinars, and joining developer communities.
                            <br /><br />
                            I am passionate about web development, enjoying the creation of responsive, user-friendly web applications and experimenting with new web technologies and frameworks. I am interested in interactive UI/UX design, improving user experience through thoughtful design and smooth interactions. My fascination with animations and 3D graphics drives my enthusiasm to bring creative and dynamic visual elements to life in web projects.
                            <br /><br />
                            Committed to lifelong learning and professional development, I am always eager to explore new technologies, frameworks, and programming languages. Collaboration and community are also important to me, as I enjoy working in team environments and participating in developer communities to share knowledge and learn from others.
                        </p>
                    </div>
                </div>
            </div>
            <div className='lg:mt-20 mt-10 flex justify-center'>
                <div>
                    <Link to="/contact" className='bg-[#D9D9D9] py-2 px-5 flex items-center gap-2'>
                        <FaArrowRight /> Contact me
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
