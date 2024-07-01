import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";
import project3 from "../../assets/images/project5.png";

const FeatureProjects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (projectId) => {
        const project = projects.find(project => project.id === projectId);
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
            description: 'A personal portfolio website showcasing my projects and skills.',
            liveLink: 'https://example.com/portfolio',
            clientSide: 'https://github.com/username/portfolio-client',
            serverSide: 'https://github.com/username/portfolio-server',
            features: [
                'Responsive design',
                'Animated transitions',
                'Contact form with email integration'
            ],
            technologies: [
                'React',
                'Tailwind CSS',
                'Node.js',
                'Express',
                'MongoDB'
            ]
        },
        {
            id: 2,
            image: project2,
            title: 'E-commerce Store',
            description: 'A fully functional e-commerce store with user authentication and payment gateway integration.',
            liveLink: 'https://example.com/ecommerce',
            clientSide: 'https://github.com/username/ecommerce-client',
            serverSide: 'https://github.com/username/ecommerce-server',
            features: [
                'User authentication',
                'Product search and filtering',
                'Shopping cart and checkout',
                'Payment gateway integration'
            ],
            technologies: [
                'Next.js',
                'Tailwind CSS',
                'Node.js',
                'Express',
                'MongoDB',
                'Stripe'
            ]
        },
        {
            id: 3,
            image: project3,
            title: 'Blog Platform',
            description: 'A modern blog platform with markdown support and user comments.',
            liveLink: 'https://example.com/blog',
            clientSide: 'https://github.com/username/blog-client',
            serverSide: 'https://github.com/username/blog-server',
            features: [
                'Markdown support for posts',
                'User comments',
                'Admin dashboard for managing posts'
            ],
            technologies: [
                'React',
                'Redux',
                'Node.js',
                'Express',
                'MongoDB'
            ]
        },
    ];

    return (
        <div className="mt-20 lg:mt-28 max-w-7xl lg:container lg:mx-auto mx-5 roboto">
            <h1 className='text-center text-5xl font-extrabold tracking-wider league uppercase'>
                Recent Projects
            </h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative bg-cover bg-center bg-no-repeat h-96 w-auto lg:w-[500px] rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300"
                        style={{ backgroundImage: `url(${project.image})` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button
                                onClick={() => openModal(project.id)}
                                className="text-white text-lg bg-black bg-opacity-75 px-5 py-3 uppercase rounded-md"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='lg:mt-20 mt-10 flex justify-center'>
                <div className='flex items-center gap-7'>
                    <Link to="/projects" className='bg-[#D9D9D9] py-2 px-5 flex items-center gap-2 rounded-md shadow hover:bg-gray-300 transition-colors duration-300'>
                        <FaArrowRight /> All Projects
                    </Link>
                    <Link to="/contact" className='bg-[#D9D9D9] py-2 px-5 flex items-center gap-2 rounded-md shadow hover:bg-gray-300 transition-colors duration-300'>
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

export default FeatureProjects;
