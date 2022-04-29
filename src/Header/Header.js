import { Link, useLinkClickHandler } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
    const handleClick = useLinkClickHandler("/login");
    return (
        <header>
            <h1>Prodigious</h1>
            <nav>
                <div class='links'>
                    <Link to="/catalog">Card Catalog</Link>
                    <Link to="/my-collection">My Collection</Link>
                    <Link to="/deck-builder">Deck Builder</Link>
                    <Button variant="primary" onClick={handleClick}>Log In</Button>
                </div>    
            </nav>
        </header>
    )
}

export default Header;