import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import Card from "./Card";

const CardWindow = (props) => {

    // Need to refactor once search functionality is complete
    const [cardData, setCardData] = useState([]);
    const [displayLimit, setDisplayLimit] = useState(50);
    const [displayOffset, setDisplayOffset] = useState(0);

    useEffect(() => {
        axios.get(`https://prodigious-be.herokuapp.com/tcgPlayer/${displayLimit}/${displayOffset}`)
            .then((res) => {
                setCardData(res.data.results);
            })
            .catch(err => {
                console.log(err);
            })}
    , [displayLimit, displayOffset]);
    
    const nextPage = () => {
        setDisplayOffset(displayOffset + 1);
    }

    const previousPage = () => {
        if (displayOffset > 0) {
            setDisplayOffset(displayOffset - 1);
        }
    }

    return (
        <div>
            <h2>Card Window</h2>
            <div id="card-container">
                {cardData.map((card) => {
                    return <Card 
                        key={card.productId} 
                        cardName={card.name} 
                        imageUrl={card.imageUrl} 
                        data={card.extendedData}
                    />
                })}
            </div>
            <div id="pagination-bar">
                <Pagination>
                    <Pagination.Prev onClick={previousPage} />
                    <Pagination.Next onClick={nextPage} />
                </Pagination>
            </div>
        </div>
    );
}

export default CardWindow;