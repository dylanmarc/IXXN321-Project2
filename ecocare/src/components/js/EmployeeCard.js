import React from 'react';
import '../css/employee-card.css';

export default function EmployeeCard(props) {
    
    return (
            <div className='card-container'>
                <div className="card-top">
                    <img className="employee-img" src={require("../../images/"+props.image+".png")} />
                </div>
                <div className="card-bottom">
                    <h1>{props.name}</h1>
                    <h2>{props.job}</h2>
                </div>
            </div>
    )
}