import React from 'react'
import '../css/page-link.css'

export default function PageLinks(props) {
    return (
        <div className='page-link-container'>
            <h1>{props.title}</h1>
            <img src={props.image} />
            <h2>{props.blurb}</h2>
        </div>
    )
}
