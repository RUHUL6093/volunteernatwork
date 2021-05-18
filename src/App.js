import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/registEvent">
            <Login/>
          </Route>
          <Route path="/myEvent">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
