import '../styles/card.css';
import { OverlayTrigger, Popover, Card } from 'react-bootstrap';
import { useState } from 'react';

const DigimonCard = (props) => {
    const { data, cardName, imageUrl } = props;
    const [imageRetrieved, setImageRetrieved] = useState(true);

    const popover = (
        <Popover id="card-popover">
            <Popover.Header as="h3"><b>{cardName}</b></Popover.Header>
            <Popover.Body>
                {data.map(element => {                   
                    return <p key={data.indexOf(element)}><b>{element.displayName}</b>: {element.value}</p>
                })}
            </Popover.Body>
        </Popover>
    );

    return (
        <div className="card-container">
            <OverlayTrigger placement="right" overlay={popover}>
                {imageRetrieved ? <img className="card-img" src={imageUrl} alt={cardName} onError={() => setImageRetrieved(false)} /> : 
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{cardName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>}
            </OverlayTrigger>
        </div>
    )
};

export default DigimonCard;