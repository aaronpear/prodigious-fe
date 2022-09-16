import axios from "axios";
import { useEffect, useState } from 'react';
import searchManifest from './searchManifest.json';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const FilterWindow = (props) => {
    const setCardData = props.setCardData;
    const setTotalResults = props.setTotalResults;
    const displayLimit = props.displayLimit;
    const displayOffset = props.displayOffset;

    const searchFormTemplate = {
        "sort": "",
        "limit": 50,
        "offset": 0,
        "filters": [
          {
            "name": "CardType",
            "values": ["Digi-Egg", "Digimon", "Tamer", "Option"]
          }
        ]
     }
    
    // User checks sort/filter values in form ->
    // we make API request with built searchForm ->
    // set productIds to ids received from previous request (string separated only by commas) ->
    // make another API request using product ids ->
    // set cardData with previous API response

    // *Will need to cache searches/results in the future for performance improvements
    const [sortState, setSortState] = useState('Default');
    const [searchForm, setSearchForm] = useState(searchFormTemplate);
    const [productIds, setProductIds] = useState([]);

    // any time our search form is updated, we retrieve a new list of productIds
    useEffect(() => {
        axios.post('https://prodigious-be.herokuapp.com/tcgPlayer/', searchForm)
            .then((res) => {
                setTotalResults(res.data.totalItems);
                setProductIds(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [searchForm])

    // when we successfully update our current productIds, we then retrieve the corresponding card data
    useEffect(() => {
        // converting productIds array to a string to be used in our API request
        let ids = ''
        for (let i = productIds.length - 1; i >= 0; i--) {
            ids += productIds[i] + ',';
        }
        ids = ids.slice(0, -1);

        axios.get(`https://prodigious-be.herokuapp.com/tcgPlayer/${ids}`)
            .then((res) => {
                setCardData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [productIds])

    // dropdown Sort selector helper functions
    const handleSelect = (event) => {
        setSearchForm({...searchForm, "sort": event});
    }

    const handleClick = (event) => {
        setSortState(event.target.name);
    }

    return (
        <div>
            <h3>Sorting By: {sortState}</h3>
            <DropdownButton id="dropdown-basic-button" onSelect={handleSelect} title="Change Sort">
                {searchManifest.results[0].sorting.map((item) => {
                    return <Dropdown.Item key={searchManifest.results[0].sorting.indexOf(item)} className='dropdown-item' name={item.text} eventKey={item.value} onClick={handleClick}>{item.text}</Dropdown.Item>
                })}
            </DropdownButton>
        </div>
    )
}

export default FilterWindow;