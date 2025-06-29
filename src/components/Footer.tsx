import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const socialLinks = [
        {
            icon: <Mail size={20} />,
            href: 'mailto:josephdominicmathew@gmail.com',
            label: 'Email'
        },
        {
            icon: <Linkedin size={20} />,
            href: 'https://www.linkedin.com/in/joseph-dominic-mathew-0b7507196/',
            label: 'LinkedIn'
        },
        {
            icon: <Github size={20} />,
            href: '#',
            label: 'GitHub'
        }
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="footer-content"
                >
                    {/* Social Links */}
                    <div className="footer-social-links">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : '_self'}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="footer-social-link"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Navigation Links */}
                    <div className="footer-nav-links">
                        {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
                            <motion.a
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                whileHover={{ scale: 1.05 }}
                                className="footer-nav-link"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="footer-copyright"
                    >
                        <p className="footer-copyright-text">
                            Made with <Heart size={16} /> by Joseph Dominic Mathew
                        </p>
                        <p className="footer-copyright-year">
                            © 2024 Joseph Dominic Mathew. All rights reserved.
                        </p>
                    </motion.div>

                    {/* Back to Top */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="footer-back-to-top"
                    >
                        <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 15l7-7 7 7"
                            />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer; 