import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import HappyClients from "./pages/HappyClient";
import "./styles/global.css";

function App() {
    return (
        <Router>
            <div className="page-container">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/solutions" element={<Solutions />} />
                        <Route path="/case-studies" element={<CaseStudies />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/happy-clients" element={<HappyClients />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
