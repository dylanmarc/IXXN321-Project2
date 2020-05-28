import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import PageLinks from "./components/js/PageLinks.js";
import data from "./data/linkdata.json";
import Nav from "./components/js/Nav.js";

import Home from "./pages/js/Home";
import Mission from "./pages/js/Mission";
import Team from "./pages/js/Team";
import ContactPage from "./pages/js/ContactPage";


export default function App() {
  return (
      <div className="App">
          <Router>
          <Nav />
          <Route path="/home" component={Home} />
          <Route path="/mission" component={Mission} />
          <Route path="/team" component={Team} />
          <Route path="/contactpage" component={ContactPage} />
          </Router>
        </div>
  );
}

