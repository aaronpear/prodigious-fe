import { useState } from 'react';
import CardWindow from './CardWindow';
import FilterWindow from './FilterWindow';
import '../styles/cardCatalog.css';

const CardCatalog = () => {   
    const [cardData, setCardData] = useState([]);

    return (
        <div>
            <h2 className="component-title">Card Catalog</h2>
            <div id="card-catalog-container">
                <div id="card-window-container">
                    <CardWindow cardData={cardData} />
                </div>
                <div id="filter-container">
                    <FilterWindow setCardData={setCardData} />
                </div>
            </div>
        </div>
    );
}

export default CardCatalog;