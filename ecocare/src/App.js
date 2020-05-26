import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import PageLinks from "./components/js/PageLinks.js";
import data from "./data/linkdata.json";

// import Mission from "./pages/js/Mission";
// import Home from "./pages/js/Home";
// import Team from "./pages/js/Team";
// import ContactPage from "./pages/js/ContactPage";

function App() {
  return (
      <div className="App">
        <div className="layer">
        {/* <Router>
        <Nav />
          <Route path="/mission" component={Mission} />
          <Route path="/home" component={Home} />
          <Route path="/team" component={Team} />
          <Route path="/contactpage" component={ContactPage} />
        </Router> */}

        <div className="top-section">
          <img src={require("./images/logo.svg")} alt="" className="logo"/>
          <h1>ECOCARE</h1>
          <h2>CARETAKERS OF MOTHER EARTH</h2>
        </div>

        <div className="page-links">
        {data.linkdata.map(i => <PageLinks title={i.title} image={i.image} blurb={i.blurb} />)}
        </div>


        </div>
      </div>
  );
}

export default App;
