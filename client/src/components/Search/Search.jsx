import React from 'react'
import './search.css'
import SearchIcon from '@material-ui/icons/Search'

const Search = ({value, changeInput}) => {
  return (
    <div className='s-container'>
      <SearchIcon className="search-icon" />
      <input type="text" placeholder='Search...' value={value} onChange={changeInput} />
    </div>
  )
}

export default Search
