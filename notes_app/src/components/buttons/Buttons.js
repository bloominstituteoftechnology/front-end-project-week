import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";


export default class Buttons extends Component {
  constructor() {
    super();

      this.state = {
      }
  }
  render() {
    return(
      <div>
         <Route path="/addNote" component={AddNote} />
        <button type="button" className="btn btn-primary btn-block mt-3">View Your notes</button>
        <Link to="/addNote"> // need to create this link
          <button type="button" className="btn btn-primary btn-block mt-3"> +Create Note</button>
        </Link>
      </div>
      
    )
      
  }
}