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
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [mobileOpen]);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">Dodgebot</div>

            {/* Mobile Menu Icon */}
            <div className="menu-icon" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </div>

            {/* Navigation Links */}
            <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
                <Link to="/DodgeBot" className="nav-link" onClick={() => setMobileOpen(false)}>Home</Link>
                <Link to="/DodgeBot/pricing" className="nav-link" onClick={() => setMobileOpen(false)}>Pricing</Link>
                {/*<Link to="/solutions" className="nav-link" onClick={() => setMobileOpen(false)}>Solutions</Link>*/}
                <Link to="/DodgeBot/contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</Link>
                <Link to="/DodgeBot/why-dodgebot" className="nav-link" onClick={() => setMobileOpen(false)}>Why Choose Dodgebot?</Link>
            </div>
        </nav>
    );
};

export default Navbar;
