import "../styles/happy-clients.css";

const HappyClients = () => {
    return (
        <div className="clients-section">
            <h1 className="clients-title">Our Happy Clients</h1>
            <div className="clients-container">
                {[
                    "Client A: Outstanding Service",
                    "Client B: Increased Efficiency",
                    "Client C: AI-powered Success",
                ].map((client, index) => (
                    <div key={index} className="client-card">
                        <h2 className="client-name">{client}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HappyClients;
