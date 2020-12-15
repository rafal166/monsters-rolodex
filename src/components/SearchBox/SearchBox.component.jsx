import React from 'react'
import './SearchBox.styles.css'

export default function SearchBox({placeholder, handleChange}) {
    return (
        <input className="search-box"
            type="search"
            placeholder={ placeholder || "monsters search"}
            onChange={handleChange}
      ></input>
    )
}
