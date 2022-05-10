import { Link, useLinkClickHandler } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../styles/header.css';

const Header = () => {
    const handleClick = useLinkClickHandler("/login");
    return (
        <header>
            <h1 class="title">Prodigious</h1>
            <nav>
                <div class='links'>
                    <Link to="/catalog" class='link' >Card Catalog</Link>
                    <Link to="/my-collection" class='link' >My Collection</Link>
                    <Link to="/deck-builder" class='link' >Deck Builder</Link>
                    <div id="login-button-container">
                        <Button variant="primary" onClick={handleClick} id="login-button">Log In</Button>
                    </div>
                </div>    
            </nav>
        </header>
    )
}

export default Header;