import React from "react";
import '../css/Team.css';
import Nav from "../../components/js/Nav.js";
import data from "../../data/employeedata.json";
import EmployeeCard from "../../components/js/EmployeeCard";

//{data.employeedata.map(i => <EmployeeCard name={i.name} image={i.image} job={i.job} path={i.path} />)}

// function displayEmployees(data){
//     let text = `<ul id='employee-list'>`
//     for(let i=0;i<data.length;i++){
//         if(i == 0){
//             text += `<div class='emp-row'><EmployeeCard name={`+data[i].name+`} image={`+data[i].image+`} job={`+data[i].job+`} blurb={`+data[i].blurb+`} />`
//         }else if(i % 3 == 0){
//             text += `</div><div class='emp-row'><EmployeeCard name={`+data[i].name+`} image={`+data[i].image+`} job={`+data[i].job+`} blurb={`+data[i].blurb+`} />`
//         }else{
//             text += `<EmployeeCard name={`+data[i].name+`} image={`+data[i].image+`} job={`+data[i].job+`} blurb={`+data[i].blurb+`} />`
//         }
//     }
//     text += `</ul>`
//     return (<div dangerouslySetInnerHTML={{ __html: text }} />);
// }

function displayEmployees(data){   
        var arr=data;
        var elements=[];
        for(var i=0;i<arr.length;i++){
            if(i + 2 < arr.length){
                elements.push(<div className='row'><EmployeeCard name={ arr[i].name } image={ arr[i].image } job={ arr[i].job } blurb={ arr[i].blurb } /> <EmployeeCard name={ arr[i+1].name } image={ arr[i+1].image } job={ arr[i+1].job } blurb={ arr[i+1].blurb } /> <EmployeeCard name={ arr[i+2].name } image={ arr[i+2].image } job={ arr[i+2].job } blurb={ arr[i+2].blurb } /></div>);
                i+=2;
            }else if(i + 1 < arr.length){
                elements.push(<div className='row'><EmployeeCard name={ arr[i].name } image={ arr[i].image } job={ arr[i].job } blurb={ arr[i].blurb } /> <EmployeeCard name={ arr[i+1].name } image={ arr[i+1].image } job={ arr[i+1].job } blurb={ arr[i+1].blurb } /></div>);
                i+=1
            }else{
                elements.push(<div className='row'><EmployeeCard name={ arr[i].name } image={ arr[i].image } job={ arr[i].job } blurb={ arr[i].blurb } /></div>);
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
            <Nav/>

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
