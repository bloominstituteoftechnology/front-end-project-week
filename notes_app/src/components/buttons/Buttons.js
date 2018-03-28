import React, { Component } from "react";

export default class Buttons extends Component {
  constructor() {
    super();

      this.state = {
      }
  }
  render() {
    return(
      <div>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-primary mt-1">Primary</button>
      </div>
    )
      
  }
}