import React from 'react';
import './searchbox.css'
const SearchBox=(props)=>{
    return(
        <input type="search"
        placeholder={props.placeholder}
        className="search"
        onChange={props.handleChange}
        />
    )
}

export default SearchBox