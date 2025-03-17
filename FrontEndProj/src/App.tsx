import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
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
                        <Route path="/DodgeBot/" element={<Home />} />
                        {/*<Route path="/DodgeBot/*" element={<Home />} />*/}
                        <Route path="/" element={<Home />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/DodgeBot/pricing" element={<Pricing />} />
                        <Route path="/solutions" element={<HappyClients />} />
                        <Route path="/DodgeBot/solutions" element={<HappyClients />} />
                        {/*<Route path="/case-studiesies" element={<CaseStudies />} />*/}
                        <Route path="/DodgeBot/contact" element={<Contact />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/why-dodgebot" element={<HappyClients />} />
                        <Route path="/DodgeBot/why-dodgebot" element={<HappyClients />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
