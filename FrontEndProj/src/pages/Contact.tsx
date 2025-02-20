import "../styles/contact.css";

const Contact = () => {
    return (
        <div className="contact-section">
            <h1 className="contact-title">Get in Touch</h1>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows={5} required></textarea>
                <button type="submit" className="contact-button">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
