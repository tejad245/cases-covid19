import React from 'react';

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