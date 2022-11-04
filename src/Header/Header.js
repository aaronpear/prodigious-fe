import { NavLink, useLinkClickHandler } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../styles/header.css';
import { getOverlayDirection } from "react-bootstrap/esm/helpers";

const Header = () => {
    const handleClick = useLinkClickHandler("/login");

    const activeStyle = {
        color: "lightgrey",
    }

    return (
        <header>
            <h1 className="title">Prodigious</h1>
            <nav>
                <div className='links'>
                    <NavLink to="/catalog" className='link' style={({ isActive }) => isActive ? activeStyle : undefined}>
                        Card Catalog
                    </NavLink>
                    <NavLink to="/my-collection" className='link' style={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Collection
                    </NavLink>
                    <NavLink to="/deck-builder" className='link' style={({ isActive }) => isActive ? activeStyle : undefined}>
                        Deck Builder
                    </NavLink>
                    <div id="login-button-container">
                        <Button variant="primary" onClick={handleClick} id="login-button">Log In</Button>
                    </div>
                </div>    
            </nav>
        </header>
    )
}

export default Header;