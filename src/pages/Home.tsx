import "../styles/home.css";

const Home = () => {
    return (
        <div className="home-container">
            <section className="about-section">
                <h1>About Us</h1>
                <p>
                    At <strong>Dodgebot</strong>, we specialize in cutting-edge web crawling and data extraction solutions designed to empower businesses with real-time, actionable insights. Whether it's review aggregation, hotel price monitoring, or curated content from Europe, we provide accurate and structured data to help you stay ahead of the competition.
                </p>
            </section>

            <section className="what-we-do">
                <h2>What We Do</h2>
                <ul>
                    <li><strong>Review Aggregation</strong> – Collect and analyze customer feedback across multiple platforms to enhance your business intelligence.</li>
                    <li><strong>Hotel Price Monitoring</strong> – Track dynamic pricing from top travel and hospitality websites to optimize revenue strategies.</li>
                    <li><strong>Localized European Content</strong> – Access high-quality, region-specific data from various European sources to enrich your platform.</li>
                </ul>
            </section>

            <section className="why-choose-us">
                <h2>Why Choose Us?</h2>
                <div className="features">
                    <div className="feature-card">🔹 <strong>Scalable & Fast Crawling</strong> – Our advanced technology ensures efficient data extraction without compromising speed.</div>
                    <div className="feature-card">🔹 <strong>High-Quality, Structured Data</strong> – We deliver clean and structured datasets ready for direct integration.</div>
                    <div className="feature-card">🔹 <strong>Custom Solutions</strong> – We tailor our crawling services to meet the unique needs of your business.</div>
                    <div className="feature-card">🔹 <strong>Compliance & Reliability</strong> – We prioritize ethical and legally compliant data extraction practices.</div>
                </div>
            </section>

            <section className="mission">
                <h2>Our Mission</h2>
                <p>At <strong>Dodgebot</strong>, our mission is to make data work for you—so you can focus on making smarter, data-driven decisions.</p>
            </section>
        </div>
    );
};

export default Home;
