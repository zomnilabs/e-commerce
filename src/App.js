import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="All">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
