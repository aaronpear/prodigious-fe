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

    const name = data.find(element => element.displayName === 'Number');

    return (
        <div className="card-container">
            <OverlayTrigger placement="right" overlay={popover}>
                {imageRetrieved ? <img className="card-img" src={imageUrl} alt={cardName} onError={() => setImageRetrieved(false)} /> : 
                <Card style={{ width: '200px', height: '279px' }}>
                    <Card.Body>
                        <Card.Title>{cardName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{name.value}</Card.Subtitle>
                    </Card.Body>
                </Card>}
            </OverlayTrigger>
        </div>
    )
};

export default DigimonCard;