import '../styles/card.css';

const Card = (props) => {
    return (
        <div class="card-container">
            <img className="card-img" src={props.imageUrl} alt={props.cardName} />
        </div>
    )
};

export default Card;