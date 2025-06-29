import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import './About.css';

const About = () => {
    const skills = [
        'Flutter', 'Python', 'Dart', 'JavaScript', 'HTML', 'CSS',
        'React Native', 'Java', 'SQL', 'NoSQL', 'Node.js', 'React.js', 'REST'
    ];

    const coursework = [
        'Operating System', 'Data Structures and Algorithm', 'Principles of Database Design',
        'Data Mining and Warehousing', 'Artificial Intelligence', 'Distributed Computing',
        'Soft Computing', 'Compiler Design', 'Computer Network'
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="about-header"
                >
                    <h2 className="about-title">
                        About Me
                    </h2>
                    <p className="about-subtitle">
                        A passionate software developer from Kerala, India, with a strong foundation
                        in computer science and a love for creating innovative digital solutions.
                    </p>
                </motion.div>

                <div className="about-grid">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="about-card"
                    >
                        <div className="about-card-header">
                            <GraduationCap className="about-card-icon" size={32} />
                            <h3 className="about-card-title">Education</h3>
                        </div>

                        <div className="about-education-section">
                            <h4 className="about-education-title">
                                Bachelor of Engineering - Computer Science
                            </h4>
                            <p className="about-education-institution">
                                Govt. Model Engineering College
                            </p>
                            <div className="about-education-details">
                                <MapPin size={16} />
                                <span>Kochi, Kerala, India</span>
                            </div>
                            <div className="about-education-details">
                                <Calendar size={16} />
                                <span>2019-2023</span>
                            </div>
                            <div className="about-gpa">
                                GPA: 9.18/10
                            </div>
                        </div>

                        <div>
                            <h5 className="about-coursework-title">Relevant Coursework</h5>
                            <div className="about-coursework-grid">
                                {coursework.map((course, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="about-coursework-item"
                                    >
                                        • {course}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="about-card"
                    >
                        <h3 className="about-skills-title">
                            Skills & Technologies
                        </h3>

                        <div className="about-skills-grid">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="about-skill-item"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>

                        <div className="about-description">
                            <p>
                                I'm passionate about learning new technologies and constantly improving my skills.
                                My experience spans across mobile development with Flutter, web development with React,
                                and backend development with Node.js. I enjoy working on challenging projects that
                                push the boundaries of what's possible with modern technology.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About; 