import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../css/Mission.css';
import Nav from "../../components/js/Nav.js";

import Home from "./Home";
import Team from "./Team";
import ContactPage from "./ContactPage";

export default function Mission() {

    return (
        
        <div className="mission"> 
          <Nav/>

          <div className="main-page">
            <h1>ECOCARE</h1>
            <h2>CARETAKERS OF MOTHER EARTH</h2>
          </div>

        </div>

        
    );
 }
