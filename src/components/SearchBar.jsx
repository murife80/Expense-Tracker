import React from "react";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search expenses..."
      value={value}
      onChange={onChange}
      className="search"
    />
  );
}

export default SearchBar;
