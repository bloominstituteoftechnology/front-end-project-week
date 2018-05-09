import React, { Component } from "react";
// import axios from 'axios';
import { Link } from "react-router-dom";
// import 

export default class NoteView extends Component {
      
    state ={
     note: null
 };
  
render() {
  console.log( "props", this.props);
   
    return <div>
        <div className="HeaderBox">
          <ul>
            <li>
              {/* <Link to={`/editView/${this.props.match.path.params}`}> Edit </Link>  */}
              <Link to={`/editView/${this.props.location.state.id}`}>
                Edit
              </Link>
            </li>
            <li>Delete</li>
          </ul>
        </div>
        <div className="contentBox">
          {console.log(this.state)}

          <h1> Title: {this.props.location.state.title} </h1>
          <h3> Content: {this.props.location.state.content} </h3>
        </div>
      </div>;
 
 

}
}