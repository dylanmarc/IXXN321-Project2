import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import '../css/employee-card.css';

export default function EmployeeCard(props) {
    
    return (
        <Link to={{
            pathname: `/employee/${props.name}`,
            state: {
                name: props.name,
                job: props.job,
                blurb: props.blurb,
                image: props.image
            }
        }}>

            <div className='card-container'>
                <div className="card-top">
                    <img className="employee-img" src={require("../../images/"+props.image+".png")} />
                </div>
                <div className="card-bottom">
                    <h1>{props.name}</h1>
                    <h2>{props.job}</h2>
                </div>
            </div>
        </Link>
    )
}
