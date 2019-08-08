import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Shoes from "./pages/shoes_category";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="All">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signin" component={SignIn} />
            <Route path="/shoes" component={Shoes} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
