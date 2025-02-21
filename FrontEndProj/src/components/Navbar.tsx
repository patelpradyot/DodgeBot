import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/navbar.css";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">Dodgebot</div>

            {/* Desktop Navigation */}
            <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
                <Link to="/" className="nav-link" onClick={() => setMobileOpen(false)}>Home</Link>
                <Link to="/pricing" className="nav-link" onClick={() => setMobileOpen(false)}>Pricing</Link>
                <Link to="/solutions" className="nav-link" onClick={() => setMobileOpen(false)}>Solutions</Link>
                <Link to="/case-studies" className="nav-link" onClick={() => setMobileOpen(false)}>Case Studies</Link>
                <Link to="/contact" className="nav-link" onClick={() => setMobileOpen(false)}>Contact</Link>
                <Link to="/happy-clients" className="nav-link" onClick={() => setMobileOpen(false)}>Happy Clients</Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="menu-icon" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
        </nav>
    );
};

export default Navbar;
