import { useState } from "react";
import { Form, Pagination, Spinner } from "react-bootstrap";
import DigimonCard from "./DigimonCard";
import FilterWindow from "./FilterWindow";

const CardWindow = (props) => {

    // Need to refactor once search functionality is complete
    const [cardData, setCardData] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [displayLimit, setDisplayLimit] = useState(50);
    const [displayOffset, setDisplayOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    
    const increaseOffset = () => {
        // only increase offset if there exists more items to retrieve
        if ((displayOffset + displayLimit) < (totalResults)) {
            setDisplayOffset(displayOffset + displayLimit);
        }
    }

    const decreaseOffset = () => {
        // do not decrease offset if we are at the beginning of the list
        if (displayOffset > 0) {
            setDisplayOffset(displayOffset - displayLimit);
        }
    }

    const handlePageInput = (e) => {
        // users cannot input non-existing page numbers
        if (e.target.value < 1) {
            e.target.value = 1;
            setDisplayOffset(0);
        } else if (e.target.value > Math.ceil(totalResults / displayLimit)) {
            e.target.value = Math.ceil(totalResults / displayLimit);
            setDisplayOffset((totalResults - displayLimit ));
        } else {
            setDisplayOffset(e.target.value - 1);
        }   
    }

    return (
        <div id="card-view-container">
            <div id="card-window-container">
                <h2>Card Window</h2>
                <div id="card-container">
                    {isLoading ? 
                        <div className="loading-placeholder">
                            <Spinner animation="grow" />
                            <h4 id="loading-text">Loading Cards...</h4>
                        </div> :
                        cardData.map((card) => {
                            return <DigimonCard 
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
                            Page {Math.ceil(displayOffset / displayLimit) + 1} of {(Math.ceil(totalResults / displayLimit))}
                        </Pagination.Item>
                        <Pagination.Next onClick={increaseOffset} className="pagination-buttons" />
                        <Pagination.Last onClick={() => setDisplayOffset((totalResults - displayLimit))} className="pagination-buttons" />
                    </Pagination>
                    <div id="page-input">
                        <Form.Label>Go To Page:</Form.Label>
                        <Form.Control
                            size="sm"
                            type="number"
                            onChange={handlePageInput}
                            id="page-number"
                        />
                        <Form.Label>Cards Displayed Per Page:</Form.Label>
                        <Form.Select size="sm" defaultValue={50} onChange={(e) => setDisplayLimit(parseInt(e.target.value))}>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={75}>75</option>
                            <option value={100}>100</option>
                        </Form.Select>
                    </div>
                </div>
            </div>
            <div id="filter-container">
                <FilterWindow setCardData={setCardData} setTotalResults={setTotalResults} setIsLoading={setIsLoading} displayLimit={displayLimit} displayOffset={displayOffset} />
            </div>        
        </div>
    );
}

export default CardWindow;