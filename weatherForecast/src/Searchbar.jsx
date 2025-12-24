import React, { useState } from "react";

const SearchBar = ({ setCity }) => {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        if (input) setCity(input);
        setInput("");
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter city"
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
