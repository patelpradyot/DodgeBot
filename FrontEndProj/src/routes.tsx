import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import HappyClients from "./pages/HappyClient";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/happy-clients" element={<HappyClients />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRoutes;
