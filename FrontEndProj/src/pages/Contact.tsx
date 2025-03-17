import "../styles/contact.css";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-card">
                <h1 className="contact-title">Get in Touch</h1>
                <p className="contact-description">
                    We'd love to hear from you! Reach out via email, call us, or connect on LinkedIn.
                </p>

                {/* Contact Details */}
                <div className="contact-details">
                    <a href="mailto:Dodgebot7@gmail.com" className="contact-item">
                        <FaEnvelope className="contact-icon email-icon" />
                        <span>Dodgebot7@gmail.com</span>
                    </a>

                    <a href="tel:+919264900391" className="contact-item">
                        <FaPhone className="contact-icon phone-icon" />
                        <span>+91 92649 00391</span>
                    </a>

                    <a href="https://www.linkedin.com/in/patelpradyot" target="_blank" rel="noopener noreferrer" className="contact-item linkedin">
                        <FaLinkedin className="contact-icon linkedin-icon" />
                        <span>Connect on LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
