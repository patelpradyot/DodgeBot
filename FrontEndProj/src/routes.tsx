import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import HappyClients from "./pages/HappyClient";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AppRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/DodgeBot/" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/solutions" element={<HappyClients />} />
                {/*<Route path="/case-studies" element={<CaseStudies />} />*/}
                <Route path="/contact" element={<Contact />} />
                <Route path="/why-dodgebot" element={<HappyClients />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default AppRoutes;
