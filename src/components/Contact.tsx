import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            label: 'Email',
            value: 'josephdominicmathew@gmail.com',
            link: 'mailto:josephdominicmathew@gmail.com'
        },
        {
            icon: <Phone size={24} />,
            label: 'Phone',
            value: '+91 907258510',
            link: 'tel:+919072588510'
        },
        {
            icon: <MapPin size={24} />,
            label: 'Location',
            value: 'Alappuzha, Kerala, India',
            link: '#'
        },
        {
            icon: <Linkedin size={24} />,
            label: 'LinkedIn',
            value: 'joseph-dominic-mathew',
            link: 'https://www.linkedin.com/in/joseph-dominic-mathew-0b7507196/'
        }
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="contact-header"
                >
                    <h2 className="contact-title">
                        Get In Touch
                    </h2>
                    <p className="contact-subtitle">
                        I'm always open to discussing new opportunities, interesting projects,
                        or just having a chat about technology. Let's connect!
                    </p>
                </motion.div>

                <div className="contact-grid">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="contact-info-title">
                            Contact Information
                        </h3>

                        <div className="contact-info-list">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="contact-info-item"
                                >
                                    <div className="contact-info-icon">
                                        {info.icon}
                                    </div>
                                    <div className="contact-info-details">
                                        <p>{info.label}</p>
                                        <a
                                            href={info.link}
                                            className="contact-info-link"
                                            target={info.link.startsWith('http') ? '_blank' : '_self'}
                                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                        >
                                            {info.value}
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="contact-message-card"
                        >
                            <h4 className="contact-message-title">
                                Let's Build Something Amazing Together!
                            </h4>
                            <p className="contact-message-text">
                                Whether you have a project in mind, want to collaborate, or just want to say hello,
                                I'd love to hear from you. I'm always excited to work on challenging projects
                                and meet new people in the tech community.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="contact-form-card"
                    >
                        <h3 className="contact-form-title">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="contact-form-group">
                                <label htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="contact-form-input"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="contact-form-input"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="contact-form-textarea"
                                    placeholder="Tell me about your project or just say hello!"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="contact-form-button"
                            >
                                <Send size={20} />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 