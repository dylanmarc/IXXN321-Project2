import React, { Component } from 'react'
import '../css/Employee.css';
import Nav from "../../components/js/Nav.js";


export default class Employee extends Component {
    componentDidMount() {
        const { handle } = this.props.match.params
    }
    render() {
        const name = this.props.location.state.name
        const job = this.props.location.state.job
        const blurb = this.props.location.state.blurb
        const image = this.props.location.state.image
        return (
            <div>
                <div className="employee"> 
                    <Nav/>

                    <div className='main-card'>
                <div className="big-card-top">
                    <img className="big-employee-img" src={require(`../../images/${image}.png`)} />
                </div>
                <div className="big-card-bottom">
                    <h1>{name}</h1>
                    <h2>{job}</h2>
                    <h3>{blurb}</h3>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
