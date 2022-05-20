import { useState } from 'react';

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

    return (
        <h3>Filter</h3>
    )
}

export default FilterWindow;