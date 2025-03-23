import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2025 Dodgebot. All Rights Reserved.</p>
            <div className="footer-links">
                <Link to="/pricing" className="footer-link">Pricing</Link>
                <Link to="/solutions" className="footer-link">Solutions</Link>
                <Link to="/contact" className="footer-link">Contact</Link>
            </div>
        </footer>
    );
};

export default Footer;
