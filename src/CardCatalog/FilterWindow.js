import { useState } from 'react';
import searchManifest from './searchManifest.json';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const FilterWindow = (props) => {
    const setCardData = props.setCardData;
    const searchFormTemplate = {
        "sort": "",
        "limit": 0,
        "offset": 0,
        "filters": [
          {
            "name": "",
            "values": []
          }
        ]
     }
    
    // User checks sort/filter values in form ->
    // we make API request with built searchForm ->
    // set productIds to ids received from previous request (string separated only by commas) ->
    // make another API request using product ids ->
    // set cardData with previous API response

    // *Will need to cache searches/results in the future for performance improvements
    const [sortState, setSortState] = useState('');
    const [searchForm, setSearchForm] = useState(searchFormTemplate);
    const [productIds, setProductIds] = useState([]);

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
                {searchManifest.sorting.map((item) => {
                    return <Dropdown.Item className='dropdown-item' name={item.text} eventKey={item.value} onClick={handleClick}>{item.text}</Dropdown.Item>
                })}
            </DropdownButton>
        </div>
    )
}

export default FilterWindow;