import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Weather from "./components/Weather";
import Enter from "./components/Enter";
import "antd/dist/antd.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <Route exact path="/" component={Enter}></Route>
          <Route path="/weather" component={Weather}></Route>
        </div>
      </div>
    );
  }
}
