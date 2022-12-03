import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import "./style_search.css"

const SearchBar = ({value,changeInput}) => (

    <div className='searchBar-wrap'>
        <SearchIcon className="searchBar-icon"/>
        <input type="text" placeholder='type here' value={value} onChange={changeInput}/>
    </div>
);

export default SearchBar