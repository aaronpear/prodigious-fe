import CardWindow from '../ViewComponents/CardWindow';
import '../styles/cardCatalog.css';

const CardCatalog = () => {   
    return (
        <div>
            <div id="card-catalog-container">
                <div>
                    <CardWindow />
                </div>
            </div>
        </div>
    );
}

export default CardCatalog;