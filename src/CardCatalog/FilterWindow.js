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
    const [searchForm, setSearchForm] = useState(searchFormTemplate);
    const [productIds, setProductIds] = useState([]);

    const handleSelect = (event) => {
        setSearchForm({...searchForm, "sort": event});
    }

    return (
        <div>
            <h3>Filter</h3>
            <DropdownButton id="dropdown-basic-button" onSelect={handleSelect} title="Sort Cards By">
                {searchManifest.sorting.map((item) => {
                    return <Dropdown.Item eventKey={item.value}>{item.text}</Dropdown.Item>
                })}
            </DropdownButton>
        </div>
    )
}

export default FilterWindow;