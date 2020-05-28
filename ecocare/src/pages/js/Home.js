import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../css/Home.css';
import PageLinks from "../../components/js/PageLinks.js";
import data from "../../data/linkdata.json";

import Mission from "./Mission";
import Team from "./Team";
import ContactPage from "./ContactPage";


export default function Home() {
    return (
        <div className="Home">
        <div className="layer">
        

        <div className="top-section">
          <img src={require("../../images/logo.svg")} alt="" className="logo"/>
          <h1>ECOCARE</h1>
          <h2>CARETAKERS OF MOTHER EARTH</h2>
        </div>

        <Router>
          <div className="bottom-section">
            <div className="page-links">
              {data.linkdata.map(i => <PageLinks title={i.title} image={i.image} blurb={i.blurb} path={i.path} />)}
            </div>
          </div>
          <Route path="/mission" component={Mission} />
          <Route path="/team" component={Team} />
          <Route path="/contactpage" component={ContactPage} />
        </Router>
        



        </div>
      </div>
    );
}
