import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../css/page-link.css';

import Mission from "../../pages/js/Mission";
import Team from "../../pages/js/Team";
import ContactPage from "../../pages/js/ContactPage";

export default function PageLinks(props) {
    
    return (
            <Link to={props.path} className={"link"}>
            <div className='page-link-container'>
                <h1>{props.title}</h1>
                <img src={props.image} />
                <h2>{props.blurb}</h2>
            </div>
            </Link>
    )
}
