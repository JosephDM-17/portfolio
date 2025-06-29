import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import './Hero.css';

const Hero = () => {
    const handleDownloadResume = () => {
        const pdf = new jsPDF();

        // Set font
        pdf.setFont('helvetica');

        // Header
        pdf.setFontSize(24);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Joseph Dominic Mathew', 105, 30, { align: 'center' });

        // Contact Info
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.text('Alappuzha, India • josephdominicmathew@gmail.com • +91 9072588510 • linkedin.com/in/joseph-dominic-mathew-0b7507196/', 105, 40, { align: 'center' });

        // Line separator
        pdf.line(20, 45, 190, 45);

        // Education Section
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'bold');
        pdf.text('EDUCATION', 20, 55);

        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Govt. Model Engineering College', 20, 65);
        pdf.text('Kochi, Kerala, India', 160, 65);

        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.text('Bachelor of Engineering, Computer Science Engineering, GPA: 9.18/10', 20, 72);
        pdf.text('2019-2023', 160, 72);

        pdf.text('Relevant Coursework: Operating System, Data Structures and Algorithm, Principles of Database Design, Data Mining and Warehousing,', 20, 78);
        pdf.text('Artificial Intelligence, Distributed Computing, Soft Computing, Compiler Design, Computer Network.', 20, 84);

        // Work Experience Section
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'bold');
        pdf.text('WORK EXPERIENCE', 20, 100);

        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Captain Fresh', 20, 110);
        pdf.text('Bengaluru, Karnataka, India', 140, 110);

        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'italic');
        pdf.text('Associate Software Developer', 20, 117);
        pdf.text('August 2023 – Present', 140, 117);

        pdf.setFont('helvetica', 'normal');
        const experiencePoints = [
            '• Collaborated on enhancing and improving a Point of Sale (POS) application using React Native, focusing on feature additions and',
            '  performance optimization.',
            '• Worked as part of a 3-member team to rebuild the same POS application using Flutter, integrating REST APIs for seamless backend',
            '  communication.',
            '• Developed, and maintained a single codebase e-commerce app, ChopServe, using Flutter to support Android, iOS, and web platforms:',
            '  ○ Built responsive and user-friendly pages with attention to detail.',
            '  ○ Integrated GraphQL APIs for efficient and robust backend communication.',
            '  ○ Delivered a seamless user experience, ensuring functionality and performance across all platforms.'
        ];

        let yPos = 125;
        experiencePoints.forEach(point => {
            pdf.text(point, 25, yPos);
            yPos += 6;
        });

        // Projects Section
        yPos += 10;
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'bold');
        pdf.text('PROJECTS', 20, yPos);

        // Project 1
        yPos += 10;
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Politika | NewsApp', 20, yPos);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'italic');
        pdf.text('Flutter, Node.js, MongoDB', 120, yPos);

        yPos += 8;
        pdf.setFont('helvetica', 'normal');
        const politikaPoints = [
            '• Designed and developed a cross-platform application to provide users with in-depth information about politics, decision-making,',
            '  and political leaders. Recognized for its innovative idea and flawless execution.',
            '• Implemented robust data filtering and search functionality, enabling users to explore political insights tailored to their',
            '  locality. Integrated a dynamic backend using Node.js and MongoDB to ensure efficient data management and scalability.',
            '• Achieved Top Product Award at the Hacking Heist Hackathon, recognized for its innovative idea and flawless execution.'
        ];

        politikaPoints.forEach(point => {
            pdf.text(point, 25, yPos);
            yPos += 6;
        });

        // Project 2
        yPos += 5;
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.text('MedWise App | Medical Assistant App', 20, yPos);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'italic');
        pdf.text('Flutter, Firebase', 120, yPos);

        yPos += 8;
        pdf.setFont('helvetica', 'normal');
        const medwisePoints = [
            '• Developed a personal medical assistant app to streamline health management for users, providing essential features like task',
            '  organization, doctor connectivity, and medical history storage.',
            '• Created an interactive to-do list for managing appointments, medications, and daily health tasks.',
            '• Integrated Firebase for real-time data synchronization, user authentication, and secure storage of sensitive medical information.',
            '• Designed a user-friendly interface using Flutter, ensuring accessibility for users of all age groups.'
        ];

        medwisePoints.forEach(point => {
            pdf.text(point, 25, yPos);
            yPos += 6;
        });

        // Add new page if needed
        if (yPos > 250) {
            pdf.addPage();
            yPos = 30;
        }

        // Project 3
        yPos += 5;
        pdf.setFontSize(12);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Landify | Land Registration System using Blockchain', 20, yPos);
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'italic');
        pdf.text('React.js, JavaScript, CSS, Ethereum, Solidity, MetaMask', 120, yPos);

        yPos += 8;
        pdf.setFont('helvetica', 'normal');
        const landifyPoints = [
            '• Developed a decentralized platform to streamline the land registration process, eliminating fraud, reducing paperwork, and',
            '  minimizing manual intervention.',
            '• Implemented smart contracts using Solidity on the Ethereum blockchain to ensure secure and immutable property transactions.',
            '• Integrated MetaMask for Ethereum-based payments, enabling secure and transparent payment handling.',
            '• Designed a user-friendly frontend using React.js and CSS, ensuring a seamless user experience for property registration and',
            '  ownership history retrieval.'
        ];

        landifyPoints.forEach(point => {
            pdf.text(point, 25, yPos);
            yPos += 6;
        });

        // Skills Section
        yPos += 10;
        pdf.setFontSize(14);
        pdf.setFont('helvetica', 'bold');
        pdf.text('SKILLS AND INTERESTS', 20, yPos);

        yPos += 8;
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.text('Flutter, Python, Dart, JavaScript, HTML, CSS, ReactNative, Java, SQL, NoSQL, NodeJS, ReactJS, REST', 20, yPos);

        // Save the PDF
        pdf.save('Joseph_Dominic_Mathew_Resume.pdf');
    };

    return (
        <section className="hero-section">
            <div className="hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        Joseph Dominic
                        <span className="hero-subtitle">
                            Mathew
                        </span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Associate Software Developer passionate about creating innovative solutions
                        with React, Flutter, and cutting-edge technologies
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.button
                            className="hero-btn-primary"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.button>
                        <motion.button
                            className="hero-btn-secondary"
                            onClick={handleDownloadResume}
                            whileHover={{ scale: 1.05, borderColor: "#60a5fa" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={20} style={{ marginRight: '8px' }} />
                            Download Resume
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="hero-social-links"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <motion.a
                            href="mailto:josephdominicmathew@gmail.com"
                            className="hero-social-link"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Mail size={24} />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/joseph-dominic-mathew-0b7507196/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Linkedin size={24} />
                        </motion.a>
                        <motion.a
                            href="https://github.com/josephdominic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Github size={24} />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="hero-arrow"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <ArrowDown className="hero-arrow" size={32} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero; 