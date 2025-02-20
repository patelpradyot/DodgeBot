import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/navbar.css";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="navbar">
            <div>Dodgebot</div>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/pricing" className="nav-link">Pricing</Link>
                <Link to="/solutions" className="nav-link">Solutions</Link>
                <Link to="/case-studies" className="nav-link">Case Studies</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to="/happy-clients" className="nav-link">Happy Clients</Link>
            </div>
            <div className="menu-icon" onClick={() => setMobileOpen(!mobileOpen)}>
                <MenuIcon />
            </div>
        </nav>
    );
};

export default Navbar;
