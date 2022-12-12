import React from 'react'

function Posting(props){
    return(
        <div style = {{border: '3px solid black', padding: '10px', marginBottom: '10px'}}>
            <div>{props.data.price}</div>
            <img src = {props.data.imageURL} alt = "" />
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
        </div>
    )
}

export default Posting