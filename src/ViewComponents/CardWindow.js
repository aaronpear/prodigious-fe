import { useState } from "react";
import { Pagination } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Card from "./Card";
import FilterWindow from "./FilterWindow";

const CardWindow = (props) => {

    // Need to refactor once search functionality is complete
    const [cardData, setCardData] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [displayLimit, setDisplayLimit] = useState(50);
    const [displayOffset, setDisplayOffset] = useState(0);
    
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
        // users cannot input non-existing page numbers
        if (e.target.value < 1) {
            e.target.value = 1;
            setDisplayOffset(0);
        } else if (e.target.value > Math.ceil(totalResults / displayLimit)) {
            e.target.value = Math.ceil(totalResults / displayLimit);
            setDisplayOffset((Math.ceil(totalResults / displayLimit - 1)));
        } else {
            setDisplayOffset(e.target.value - 1);
        }   
    }

    return (
        <div id="card-view-container">
            <div id="card-window-container">
                <h2>Card Window</h2>
                <div id="card-container">
                    {cardData.map((card) => {
                        // console.log('rerendering card', card.cleanName);
                        return <Card 
                            key={card.productId} 
                            popoverKey={card.productId} 
                            cardName={card.cleanName} 
                            imageUrl={card.imageUrl}
                            data={card.extendedData}
                        />
                    })}
                </div>
                <div id="pagination-bar">
                    <Pagination>
                        <Pagination.First onClick={() => setDisplayOffset(0)} className="pagination-buttons" />
                        <Pagination.Prev onClick={decreaseOffset} className="pagination-buttons" />
                        <Pagination.Item id="page-counter" disabled={true}>
                            Page {displayOffset + 1} of {(Math.ceil(totalResults / displayLimit))}
                        </Pagination.Item>
                        <Pagination.Next onClick={increaseOffset} className="pagination-buttons" />
                        <Pagination.Last onClick={() => setDisplayOffset(Math.ceil(totalResults / displayLimit) - 1)} className="pagination-buttons" />
                    </Pagination>
                    <div id="page-input">
                        <Form.Label>Go To Page:</Form.Label>
                        <Form.Control
                            size="sm"
                            type="number"
                            onChange={handlePageInput}
                            id="page-number"
                        />
                    </div>
                </div>
            </div>
            <div id="filter-container">
                <FilterWindow setCardData={setCardData} setTotalResults={setTotalResults} displayLimit={displayLimit} displayOffset={displayOffset} cardData={cardData} />
            </div>        
        </div>
    );
}

export default CardWindow;