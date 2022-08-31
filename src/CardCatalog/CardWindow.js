import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Card from "./Card";

const CardWindow = (props) => {

    // Need to refactor once search functionality is complete
    const [cardData, setCardData] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [displayLimit, setDisplayLimit] = useState(50);
    const [displayOffset, setDisplayOffset] = useState(0);

    useEffect(() => {
        axios.get(`https://prodigious-be.herokuapp.com/tcgPlayer/${displayLimit}/${displayOffset}`)
            .then((res) => {
                setCardData(res.data.results);
                setTotalResults(res.data.totalItems);
            })
            .catch(err => {
                console.log(err);
            })}
    , [displayLimit, displayOffset]);
    
    const increaseOffset = () => {
        // only increase offset if there exists more items to retrieve
        if ((displayOffset + 1) * displayLimit < (totalResults)) {
            setDisplayOffset(displayOffset + 1);
        }
    }

    const decreaseOffset = () => {
        // do not decrease offset if we are at the beginning of the list
        if (displayOffset > 0) {
            setDisplayOffset(displayOffset - 1);
        }
    }

    const handlePageInput = (e) => {
        if (e.target.value && typeof parseInt(e.target.value) === "number") {
            if (parseInt(e.target.value) < 1) {
                e.target.value = 1;
                setDisplayOffset(0);
            } else if (parseInt(e.target.value) > Math.ceil(totalResults / displayLimit)) {
                e.target.value = Math.ceil(totalResults / displayLimit);
                setDisplayOffset((Math.ceil(totalResults / displayLimit - 1)));
            } else {
                setDisplayOffset(e.target.value - 1);
                console.log(e.target.value);    
            }   
        }
    }

    return (
        <div>
            <h2>Card Window</h2>
            <div id="card-container">
                {cardData.map((card) => {
                    return <Card 
                        key={card.productId} 
                        cardName={card.cleanName} 
                        imageUrl={card.imageUrl}
                        data={card.extendedData}
                    />
                })}
            </div>
            <div id="pagination-bar">
                <Pagination>
                    <Pagination.First onClick={() => setDisplayOffset(0)}/>
                    <Pagination.Prev onClick={decreaseOffset} />
                    <Pagination.Item id="page-counter">
                        Page {displayOffset + 1} of {(Math.ceil(totalResults / displayLimit))}
                    </Pagination.Item>
                    <Pagination.Next onClick={increaseOffset} />
                    <Pagination.Last onClick={() => setDisplayOffset(Math.ceil(totalResults / displayLimit) - 1)}/>
                </Pagination>
                <div id="page-input">
                    <Form.Label>Go To Page:</Form.Label>
                    <Form.Control
                        size="sm"
                        type="text"
                        onChange={handlePageInput}
                        id="page-number"
                    />
                </div>
            </div>
        </div>
    );
}

export default CardWindow;