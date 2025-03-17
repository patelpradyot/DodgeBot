import "../styles/happy-clients.css";

const HappyClients = () => {
    return (
        <section className="clients-section">
            <div className="clients-container">
                <h1 className="clients-title">Why Work With Us?</h1>
                <p className="clients-subtitle">
                    At **Dodgebot**, we specialize in **web crawling and data extraction**, delivering
                    high-quality, structured data in **any format** you need.
                    Whether it’s **pricing intelligence, review aggregation, or large-scale data retrieval**, we make it seamless.
                </p>

                <div className="clients-grid">
                    {[
                        {
                            title: "Custom Data Extraction",
                            description: "We collect data from any website and deliver it in formats like JSON, CSV, Excel, or API-ready."
                        },
                        {
                            title: "Scalable Web Crawling",
                            description: "Our solutions handle large-scale scraping with speed, accuracy, and compliance in mind."
                        },
                        {
                            title: "Data Analysis (On Demand)",
                            description: "Need insights? We help businesses analyze extracted data to drive smarter decisions."
                        },
                    ].map((item, index) => (
                        <div key={index} className="client-card">
                            <h2 className="client-title">{item.title}</h2>
                            <p className="client-description">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="trust-message">
                    <p>🚀 **Your data, delivered your way. Let’s work together.**</p>
                </div>
            </div>
        </section>
    );
};

export default HappyClients;
