import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/js/Nav.js";

import Home from "./pages/js/Home";
import Mission from "./pages/js/Mission";
import Team from "./pages/js/Team";
import ContactPage from "./pages/js/ContactPage";
import Employee from "./pages/js/Employee";


export default function App() {
  return (
      <div className="App">
          <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/mission" component={Mission} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/contactpage" component={ContactPage} />
          <Route path="/:handle" component={Employee} />
          </Switch>
          </Router>
        </div>
  );
}

