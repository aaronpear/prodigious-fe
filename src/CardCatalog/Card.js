const Card = (props) => {
    return (
        <div class="card">
            <h3>{props.cardName}</h3>
            <img src={props.imageUrl} alt={props.cardName} />
        </div>
    )
};

export default Card;