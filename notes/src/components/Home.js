import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./components.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <h1>Welcome to my shitty Notes app!</h1>
      </div>
    );
  }
}
