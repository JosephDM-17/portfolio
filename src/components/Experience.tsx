import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Associate Software Developer',
            company: 'Captain Fresh',
            location: 'Bengaluru, Karnataka, India',
            period: 'August 2023 – Present',
            achievements: [
                'Collaborated on enhancing and improving a Point of Sale (POS) application using React Native, focusing on feature additions and performance optimization.',
                'Worked as part of a 3-member team to rebuild the same POS application using Flutter, integrating REST APIs for seamless backend communication.',
                'Developed, and maintained a single codebase e-commerce app, ChopServe, using Flutter to support Android, iOS, and web platforms:',
                '• Built responsive and user-friendly pages with attention to detail.',
                '• Integrated GraphQL APIs for efficient and robust backend communication.',
                '• Delivered a seamless user experience, ensuring functionality and performance across all platforms.'
            ]
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="experience-header"
                >
                    <h2 className="experience-title">
                        Work Experience
                    </h2>
                    <p className="experience-subtitle">
                        My professional journey in software development, building innovative solutions
                        and contributing to impactful projects.
                    </p>
                </motion.div>

                <div className="experience-content">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="experience-item"
                        >
                            <div className="experience-card-header">
                                <div className="experience-icon">
                                    <Briefcase size={24} />
                                </div>
                                <div className="experience-details">
                                    <h3 className="experience-job-title">
                                        {exp.title}
                                    </h3>
                                    <h4 className="experience-company">
                                        {exp.company}
                                    </h4>
                                    <div className="experience-meta">
                                        <div className="experience-meta-item">
                                            <MapPin size={16} />
                                            <span>{exp.location}</span>
                                        </div>
                                        <div className="experience-meta-item">
                                            <Calendar size={16} />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="experience-achievements">
                                {exp.achievements.map((achievement, achIndex) => (
                                    <motion.div
                                        key={achIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                                        className="experience-achievement"
                                    >
                                        <div className="experience-bullet"></div>
                                        <p className="experience-achievement-text">{achievement}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Tech Stack Tags */}
                            <div className="experience-tech-tags">
                                {['React Native', 'Flutter', 'REST APIs', 'GraphQL', 'Android', 'iOS', 'Web'].map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="experience-tech-tag"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience; 