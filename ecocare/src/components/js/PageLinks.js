import React from 'react';
import { Link } from "react-router-dom";
import '../css/page-link.css';




export default function PageLinks(props) {

    return (
        <Link to={props.path} className={"link"}>
            <div className='page-link-container'>
                <h1>{props.title}</h1>
                <img className="page-link-img" src={require("../../images/" + props.image + "-icon.svg")} />
                <h2>{props.blurb}</h2>
            </div>
        </Link>
    )
}
