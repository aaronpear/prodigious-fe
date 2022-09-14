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
    const [sortState, setSortState] = useState('Default');
    const [searchForm, setSearchForm] = useState(searchFormTemplate);
    const [productIds, setProductIds] = useState([]);

    // useEffect(() => {
    //     axios.get(`https://prodigious-be.herokuapp.com/tcgPlayer/${displayLimit}/${displayOffset}`)
    //         .then((res) => {
    //             setCardData(res.data.results);
    //             setTotalResults(res.data.totalItems);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })}
    // , [displayLimit, displayOffset]);

    useEffect(() => {
        axios.post('https://prodigious-be.herokuapp.com/tcgPlayer/', searchForm)
            .then((res) => {
                setTotalResults(res.data.totalItems)
                setProductIds(res.data.results);

                let ids = ''
                productIds.forEach(item => {
                    ids += (item + ',')
                })
                ids = ids.slice(0, -1);

                axios.get(`https://prodigious-be.herokuapp.com/tcgPlayer/${ids}`)
                    .then((res_2) => {
                        setCardData(res_2.data);
                    })
                    .catch((err_2) => {
                        console.log(err_2);
                    })
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


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