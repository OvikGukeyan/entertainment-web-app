import React from 'react'

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
          <img src="./assets/icon-search.svg" alt=" " />
          <input type="text" placeholder="Search for movies or TV series" />
        </div>
  )
}

export default SearchBar