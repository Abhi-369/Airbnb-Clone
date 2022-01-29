import React, { useState } from 'react';
import './Search.css';
import "react-date-range/dist/styles.css";//main style file
import "react-date-range/dist/theme/default.css";//theme css file
import { DateRangePicker } from 'react-date-range'
import { Button } from "@material-ui/core";
import { FaUserFriends } from "react-icons/fa";

// date picker component
function Search() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };
    function handleSelect(ranges) {
        setStartDate(ranges.Selection.startDate);
        setEndDate(ranges.Selection.endDate);
    }
    return <div className="search">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <h2>
            Number Of Guests
            <FaUserFriends />
        </h2>
        <input min={0} defaultValue={2} type="number" />

        <Button>Search Airbnb</Button>

    </div>;
}

export default Search;
