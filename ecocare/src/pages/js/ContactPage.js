import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../css/ContactPage.css';
import Nav from "../../components/js/Nav.js";

import Home from "./Home";
import Team from "./Team";
import Mission from "./Mission";

export default function ContactPage() {

    return (
        
        <div className="contactpage"> 
            <Nav/>

            <div className="main-page">
                <h1>CONTACT US</h1>
                <div className="line" />
                <form>
                    <input className="txtinput" type="text" placeholder="Name" />
                    <input className="txtinput" type="email" placeholder="Email Address" />
                    <textarea id="message" name="message" rows="4" cols="50" placeholder="Message" />
                    <input id="submit" type="submit" value="Send" />
                </form>
            </div>
        </div>
        
    );
 }
