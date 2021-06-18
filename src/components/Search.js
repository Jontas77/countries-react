const Search = ({ searchValue, handleSearch }) => {
    
    return(
        <div className="search">
            <i className="fa fa-search search-icon"></i>
        <input 
        className="searchBar"
        type="text"
        placeholder="Search for a country..."
        value={searchValue}
        onChange={handleSearch}
         />
         </div>
    );
};

export default Search;
