import "../styles/pricing.css";
import { Link } from "react-router-dom";

const Pricing = () => {
    return (
        <div className="pricing-section">
            <div className="pricing-content">
                <h1 className="pricing-title">Custom Pricing for Your Needs</h1>
                <p className="pricing-description">
                    At Dodgebot, we understand that every business has unique requirements.
                    Contact us for a **customized plan** tailored to your needs.
                </p>

                <div className="pricing-card">
                    <h2 className="pricing-contact-title">Let's Talk</h2>
                    <p className="pricing-contact-text">
                        Get in touch with us to explore the best solution for your business.
                    </p>
                    <Link to="/contact">
                        <button className="pricing-button">Contact Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
