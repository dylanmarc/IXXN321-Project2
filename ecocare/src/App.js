import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';


// import Mission from "./pages/js/Mission";
// import Home from "./pages/js/Home";
// import Team from "./pages/js/Team";
// import ContactPage from "./pages/js/ContactPage";


function App() {
  return (
      <div className="App">
        {/* <Router>
        <Nav />
          <Route path="/mission" component={Mission} />
          <Route path="/home" component={Home} />
          <Route path="/team" component={Team} />
          <Route path="/contactpage" component={ContactPage} />
        </Router> */}

        <div className="top-section">
          <img src={require("./images/logo.svg")} alt="" className="logo"/>
          <h1 className="title">ECOCARE</h1>
          <h2 className="subtitle">CARETAKERS OF MOTHER EARTH</h2>
        </div>

        <div className="page-links">

        </div>


        
      </div>
  );
}

export default App;
