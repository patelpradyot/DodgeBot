import "../styles/pricing.css";

const Pricing = () => {
    return (
        <div className="pricing-section">
            <h1 className="pricing-title">Pricing Plans</h1>
            <div className="pricing-container">
                <div className="pricing-card">
                    <h2 className="pricing-plan">Basic</h2>
                    <p className="pricing-price">$19/month</p>
                    <button className="pricing-button">Get Started</button>
                </div>
                <div className="pricing-card">
                    <h2 className="pricing-plan">Pro</h2>
                    <p className="pricing-price">$49/month</p>
                    <button className="pricing-button">Get Started</button>
                </div>
                <div className="pricing-card">
                    <h2 className="pricing-plan">Enterprise</h2>
                    <p className="pricing-price">$99/month</p>
                    <button className="pricing-button">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
