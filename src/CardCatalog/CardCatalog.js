import CardWindow from './CardWindow';
import FilterWindow from './FilterWindow';
import '../styles/cardCatalog.css';

// Request Body Template:
// {
//     "sort": "string",
//     "limit": 0,
//     "offset": 0,
//     "filters": [
//       {
//         "name": "string",
//         "values": [
//           "string"
//         ]
//       }
//     ]
//  }

const CardCatalog = () => {
    return (
        <div>
            <h2 class="component-title">Card Catalog</h2>
            <div id="card-catalog-container">
                <div id="card-window-container">
                    <CardWindow />
                </div>
                <div id="filter-container">
                    <FilterWindow />
                </div>
            </div>
        </div>
    );
}

export default CardCatalog;