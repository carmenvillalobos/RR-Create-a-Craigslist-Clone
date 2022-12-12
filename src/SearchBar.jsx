import React from 'react'

function SearchBar(props){
    return(
        <input type= {props.type} placeholder={props.placeholder} />
    )
}

export default SearchBar