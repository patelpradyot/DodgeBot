import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/navbar.css";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">Dodgebot</div>

            {/* Desktop & Mobile Navigation */}
            <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
                <Link to="/" className="nav-link" onClick={() => setMobileOpen(false)}>Home</Link>
                <Link to="/pricing" className="nav-link" onClick={() => setMobileOpen(false)}>Pricing</Link>
                <Link to="/solutions" className="nav-link" onClick={() => setMobileOpen(false)}>Solutions</Link>
                {/*<Link to="/case-studies" className="nav-link" onClickk={() => setMobileOpen(false)}>Case Studies</Link>*/}
                <Link to="/contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</Link>
                <Link to="/why-dodgebot" className="nav-link" onClick={() => setMobileOpen(false)}>Why Choose Dodgebot?</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="menu-icon" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
        </nav>
    );
};

export default Navbar;
