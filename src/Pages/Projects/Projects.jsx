import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Banner from "../../Shared/Banner/Banner.jsx";

import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project3.png";
import project4 from "../../assets/images/project4.png";
import project5 from "../../assets/images/project5.png";
import project6 from "../../assets/images/project6.png";

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const projects = [
        {
            id: 1,
            image: project1,
            title: 'Portfolio Website',
            description: 'Your Ultimate Contest Platform',
            liveLink: 'https://photo-contest-cb4ef.web.app/',
            clientSide: 'https://github.com/dev-kawser/winzone-client',
            serverSide: 'https://github.com/dev-kawser/winzone-server',
            features: [
                'Payment System',
                'CRUD',
                'User comments',
                'Admin dashboard for managing posts'
            ],
            technologies: [
                'React',
                'Tailwind CSS',
                'Node.js',
                'Express',
                'MongoDB',
                'Stripe'
            ]
        },
        {
            id: 2,
            image: project2,
            title: 'Query Website',
            description: 'Your ultimate destination for smartphone reviews, comparisons, buying guides, and more!',
            liveLink: 'https://smart-tech-project.web.app/',
            clientSide: 'https://github.com/dev-kawser/query-website-client',
            serverSide: 'https://github.com/dev-kawser/query-website-server',
            features: [
                'User authentication',
                'CRUD',
                'Add comments',
                'Add recommendation',
            ],
            technologies: [
                'Tailwind CSS',
                'React',
                'Node.js',
                'Express',
                'MongoDB',
            ]
        },
        {
            id: 3,
            image: project3,
            title: 'Artistic Avenue',
            description: 'Welcome to Artistic Avenue, where creativity knows no bounds. Explore, share, and learn within our vibrant community of artists and art enthusiasts.',
            liveLink: 'https://art-and-craft-cdc17.web.app/',
            clientSide: 'https://github.com/dev-kawser/artistic-avenue-client',
            serverSide: 'https://github.com/dev-kawser/artistic-avenue-server',
            features: [
                'Responsive UI',
                'Animated Element',
                'CRUD'
            ],
            technologies: [
                'React',
                'Tailwind',
                'Node.js',
                'Express',
                'MongoDB'
            ]
        },
        {
            id: 4,
            image: project4,
            title: 'Hockey Haven',
            description: 'Responsive front end static application',
            liveLink: 'https://devsafi.github.io/hockey-haven/',
            clientSide: 'https://github.com/dev-kawser/hokcey-haven',
            serverSide: 'https://github.com/dev-kawser/hokcey-haven',
            features: [
                'Responsive Design',
                'Interactive UI',
            ],
            technologies: [
                'HTML',
                'CSS',
                'Tailwind',
                'JavaScript',
                'DOM'
            ]
        },
        {
            id: 5,
            image: project5,
            title: 'BUS Ticket Counter',
            description: 'A modern bus ticket counter web application.',
            liveLink: 'https://devsafi.github.io/safi-travels/',
            clientSide: 'https://github.com/dev-kawser/s-travels',
            serverSide: 'https://github.com/dev-kawser/s-travels',
            features: [
                'Responsive Design',
                'Buy Ticket',
                'Discount features'
            ],
            technologies: [
                'HTML',
                'CSS',
                'Tailwind',
                'JavaScript',
                'DOM'
            ]
        },
        {
            id: 6,
            image: project6,
            title: 'Travel Agency',
            description: 'Responsive front end static application',
            liveLink: 'https://devsafi.github.io/travel-agency/',
            clientSide: 'https://github.com/dev-kawser/travel-agency',
            serverSide: 'https://github.com/dev-kawser/travel-agency',
            features: [
                'Responsive Design',
                'Interactive UI',
            ],
            technologies: [
                'HTML',
                'CSS',
                'Tailwind',
                'JavaScript',
                'DOM'
            ]
        }
    ];

    return (
        <div>
            <Banner h1="MY PROJECTS" h3="MADE WITH LOVE" />

            <div className="mt-20 lg:mt-28 max-w-7xl lg:container lg:mx-auto mx-5 roboto">
                <h1 className='text-center text-5xl font-extrabold tracking-wider league uppercase'>
                    All Projects
                </h1>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-out"
                            data-aos-delay="300"
                            key={project.id}
                            className="relative bg-cover bg-center bg-no-repeat h-96 w-auto lg:w-[500px] rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
                            style={{ backgroundImage: `url(${project.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button
                                    onClick={() => openModal(project)}
                                    className="text-white text-lg bg-black bg-opacity-75 px-5 py-3 uppercase rounded-md"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='lg:mt-20 mt-10 flex justify-center'>
                <div>
                    <Link to="/contact" className='bg-[#D9D9D9] py-2 px-5 flex items-center gap-2'>
                        <FaArrowRight /> Contact me
                    </Link>
                </div>
            </div>

            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div data-aos="slide-down" className="bg-white mx-2 p-8 rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto lg:mx-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                            <button
                                onClick={closeModal}
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300"
                            >
                                Close
                            </button>
                        </div>
                        <img src={selectedProject.image} alt={selectedProject.title} className="mb-4 w-full rounded-lg" />
                        <p className="mb-4 text-lg text-gray-700">{selectedProject.description}</p>
                        <div className="mb-4">
                            <h3 className="font-bold text-xl mb-2">Features:</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {selectedProject.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-bold text-xl mb-2">Technologies:</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {selectedProject.technologies.map((technology, index) => (
                                    <li key={index}>{technology}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-lg font-semibold underline">
                                Live Link
                            </a>
                            <a href={selectedProject.clientSide} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-lg font-semibold underline">
                                Client Side
                            </a>
                            <a href={selectedProject.serverSide} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-lg font-semibold underline">
                                Server Side
                            </a>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
};

export default Projects;
