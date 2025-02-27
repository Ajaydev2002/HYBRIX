import React, { useState } from "react";


const DropdownMenu = () => {

    const [selectedOptions, setSelectedOptions] = useState('');

    const handleClick = (event) => {
        setSelectedOptions(event.target.value)
    }

    return (
        <div className="dropdown-container">
            <label>SORT BY:</label>
            <select value = {selectedOptions} onChange={handleClick}>
                <option value="Today">Today</option>
                <option value="Yesterday">Yesterday</option>
                <option value="Last 7 days">Last 7 days</option>
                <option value="Last 30 days">Last 30 days</option>
                <option value="This Month">This Month</option>
                <option value="Last Month">Last Month</option>
            </select>
        </div>
    )
}

export default DropdownMenu;