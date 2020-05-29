import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../css/employee-card.css';

export default function EmployeeCard(props) {
    
    return (
            <Link to={props.path} className={"link"}>
            <div className='card-container'>
                <img src={props.image} />
                <h1>{props.name}</h1>
                <h2>{props.job}</h2>
            </div>
            </Link>
    )
}