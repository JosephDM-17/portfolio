import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Award } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Politika | NewsApp',
            description: 'Designed and developed a cross-platform application to provide users with in-depth information about politics, decision-making, and political leaders. Recognized for its innovative idea and flawless execution.',
            features: [
                'Implemented robust data filtering and search functionality',
                'Integrated dynamic backend using Node.js and MongoDB',
                'Achieved Top Product Award at Hacking Heist Hackathon'
            ],
            technologies: ['Flutter', 'Node.js', 'MongoDB'],
            award: 'Top Product Award - Hacking Heist Hackathon',
            demoLink: '#',
            githubLink: '#'
        },
        {
            title: 'MedWise App | Medical Assistant',
            description: 'Developed a personal medical assistant app to streamline health management for users, providing essential features for comprehensive healthcare tracking.',
            features: [
                'Created interactive to-do list for managing appointments and medications',
                'Integrated Firebase for real-time data synchronization',
                'Designed user-friendly interface ensuring accessibility for all age groups',
                'Implemented secure storage of sensitive medical information'
            ],
            technologies: ['Flutter', 'Firebase'],
            demoLink: '#',
            githubLink: '#'
        },
        {
            title: 'Landify | Blockchain Land Registration',
            description: 'Developed a decentralized platform to streamline the land registration process, eliminating fraud, reducing paperwork, and minimizing manual intervention.',
            features: [
                'Implemented smart contracts using Solidity on Ethereum blockchain',
                'Integrated MetaMask for secure Ethereum-based payments',
                'Designed user-friendly frontend using React.js and CSS',
                'Ensured secure and immutable property transactions'
            ],
            technologies: ['React.js', 'JavaScript', 'CSS', 'Ethereum', 'Solidity', 'MetaMask'],
            demoLink: '#',
            githubLink: '#'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="projects-header"
                >
                    <h2 className="projects-title">
                        Featured Projects
                    </h2>
                    <p className="projects-subtitle">
                        A collection of projects that showcase my skills in mobile development,
                        web development, and blockchain technology.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="projects-card"
                        >
                            <div className="projects-card-content">
                                <div className="projects-card-header">
                                    <h3 className="projects-card-title">
                                        {project.title}
                                    </h3>
                                    <div className="projects-card-links">
                                        <a
                                            href={project.demoLink}
                                            className="projects-card-link"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            className="projects-card-link"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                                {project.award && (
                                    <div className="projects-award">
                                        <Award className="projects-award-icon" size={16} />
                                        <span className="projects-award-text">
                                            {project.award}
                                        </span>
                                    </div>
                                )}

                                <p className="projects-description">
                                    {project.description}
                                </p>

                                <div className="projects-features-list">
                                    <h4 className="projects-features-title">Key Features:</h4>
                                    <ul>
                                        {project.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="projects-feature-item">
                                                <div className="projects-feature-bullet"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="projects-tech-tags">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="projects-tech-tag"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="projects-cta"
                >
                    <button className="projects-cta-button">
                        View All Projects
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects; 