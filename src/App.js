import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import RegisterEvent from "./components/RegisterEvent/RegisterEvent";
import MyEvent from "./components/MyEvent/MyEvent";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/registerEvent">
            <RegisterEvent />
          </PrivateRoute>
          <PrivateRoute path="/myEvent">
            <MyEvent />
          </PrivateRoute>
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
