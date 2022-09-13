import '../styles/card.css';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const Card = (props) => {

    const popover = (
        <Popover id="card-popover">
            <Popover.Header as="h3"><b>{props.cardName}</b></Popover.Header>
            <Popover.Body>
                {props.data.map(element => {                   
                    return <p key={props.data.indexOf(element)}><b>{element.displayName}</b>: {element.value}</p>
                })}
            </Popover.Body>
        </Popover>
    );

    return (
        <div className="card-container">
            <OverlayTrigger placement="right" overlay={popover}>
                <img className="card-img" src={props.imageUrl} alt={props.cardName} />
            </OverlayTrigger>
        </div>
    )
};

export default Card;