import React from 'react'
//we imported the Posting component here b/c Gallery is the parent component of Posting
import Posting from './Posting'
import {postings} from './postings.js'

function Gallery(props){
    return (
        <div>
            <h1>Gallery</h1>
            {postings.map((e, i) => {
                return <Posting data={e} key={i}/>
            })}
        </div>
    )
}

export default Gallery