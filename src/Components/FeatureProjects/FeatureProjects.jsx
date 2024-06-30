import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import project1 from "../../assets/images/feature3.png";
import project2 from "../../assets/images/feature2.png";
import project3 from "../../assets/images/feature1.png";

const FeatureProjects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (projectNumber) => {
        setSelectedProject(projectNumber);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const projects = [
        { id: 1, image: project1 },
        { id: 2, image: project2 },
        { id: 3, image: project3 }
    ];

    return (
        <div className="mt-20 lg:mt-28 max-w-6xl lg:mx-auto mx-5 roboto">
            <h1 className='text-center text-5xl font-extrabold tracking-wider league uppercase'>
                Recent Projects
            </h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative border-2 bg-cover bg-center bg-no-repeat h-96 rounded-lg"
                        style={{ backgroundImage: `url(${project.image})` }}
                    >
                        <div className="absolute rounded-lg inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button
                                onClick={() => openModal(project.id)}
                                className="text-black text-lg bg-[#D9D9D9] px-3 py-2 uppercase"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='lg:mt-20 mt-10 flex justify-center'>
                <div className='flex items-center gap-7'>
                    <Link to="/all-projects" className='bg-[#D9D9D9] py-2 px-5 flex items-center gap-2'>
                        <FaArrowRight /> All Projects
                    </Link>
                    <Link to="/contact" className='bg-[#D9D9D9] py-2 px-5 flex items-center gap-2'>
                        <FaArrowRight /> Contact me
                    </Link>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div data-aos="slide-down" className="bg-white mx-2 p-8 rounded-lg shadow-lg max-w-lg lg:mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Project {selectedProject} Details</h2>
                        <p className="mb-4">Here you can add detailed information about Project {selectedProject}.</p>
                        <button
                            onClick={closeModal}
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FeatureProjects;
