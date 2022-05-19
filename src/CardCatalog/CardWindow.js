import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const CardWindow = () => {
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        axios.get('https://prodigious-be.herokuapp.com/tcgPlayer')
            .then((res) => {
                setCardData(res.data.results);
            })
            .catch(err => {
                console.log(err);
            })}
    , []);

    return (
        <div>
            <h2>Card Window</h2>
            <div id="card-container">
                {cardData.map((card) => {
                    return <Card cardName={card.name} imageUrl={card.imageUrl} />
                })}
            </div>
        </div>
    );
}

export default CardWindow;