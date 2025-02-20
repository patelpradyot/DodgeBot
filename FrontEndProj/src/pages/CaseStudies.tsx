import "../styles/case-studies.css";

const CaseStudies = () => {
    return (
        <div className="case-studies-section">
            <h1 className="case-studies-title">Case Studies</h1>
            <div className="case-studies-container">
                {[
                    "Company A: 2x Revenue Growth",
                    "Company B: 50% Cost Reduction",
                    "Company C: AI-driven Success",
                ].map((study, index) => (
                    <div key={index} className="case-study-card">
                        <h2 className="case-study-name">{study}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudies;
