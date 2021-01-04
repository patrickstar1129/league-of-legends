import React from 'react'
import './Header.css'
import Search from './Search-Bar/Search'

function Header({handleInputChange}) {
  return (
    <div className="header_container">
      <div className="header_logo">
        logo
      </div>
      <div className="header_search">
        <Search handleInputChange={handleInputChange}/>
      </div>

      <div className="header_message">
        stay home kids
      </div>

    </div>
  )
}

export default Header
