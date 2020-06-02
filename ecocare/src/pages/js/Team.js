import React from "react";
import '../css/Team.css';
import Nav from "../../components/js/Nav.js";
import data from "../../data/employeedata.json";
import EmployeeCard from "../../components/js/EmployeeCard";

function displayEmployees(data) {
    var arr = data;
    var elements = [];
    for (var i = 0; i < arr.length; i++) {
        if (i + 2 < arr.length) {
            elements.push(<div className='row'><EmployeeCard name={arr[i].name} image={arr[i].image} job={arr[i].job} blurb={arr[i].blurb} /> <EmployeeCard name={arr[i + 1].name} image={arr[i + 1].image} job={arr[i + 1].job} blurb={arr[i + 1].blurb} /> <EmployeeCard name={arr[i + 2].name} image={arr[i + 2].image} job={arr[i + 2].job} blurb={arr[i + 2].blurb} /></div>);
            i += 2;
        } else if (i + 1 < arr.length) {
            elements.push(<div className='row'><EmployeeCard name={arr[i].name} image={arr[i].image} job={arr[i].job} blurb={arr[i].blurb} /> <EmployeeCard name={arr[i + 1].name} image={arr[i + 1].image} job={arr[i + 1].job} blurb={arr[i + 1].blurb} /></div>);
            i += 1
        } else {
            elements.push(<div className='row'><EmployeeCard name={arr[i].name} image={arr[i].image} job={arr[i].job} blurb={arr[i].blurb} /></div>);
        }
    }

    return (
        <div>
            {elements}
        </div>
    );
}


export default function Team() {

    return (

        <div className="team">
            <Nav />

            <div className="main-page">
                <h1>OUR TEAM</h1>
                <div className="line" />
                <div className="employees">
                    {displayEmployees(data.employeedata)}
                </div>
            </div>
        </div>


    );
}
