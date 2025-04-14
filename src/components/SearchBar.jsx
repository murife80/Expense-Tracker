import React from 'react';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="form-control" style={{ marginBottom: '20px' }}>
      <label htmlFor="search">Search Transactions</label>
      <input
        type="text"
        id="search"
        placeholder="Search by description"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
