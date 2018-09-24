import React, { Component} from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './SideBar.css';





class sideBar extends Component {
  render() {
    return (
      <Router>
      <div className="side-bar-container">
      <img src='/Users/josephbradley/Desktop/practice-dir/front-end-project-week/lambdanotes/public/lambda.png' alt="Lambda"/>
      <h2> Lambda Notes </h2>
        <div className="view-button">
          <Link to ="/viewcards"><button className="button"><span>View Cards</span></button></Link>
        </div>
        <div className="create-button">
         <Link to = "/createcards"><button className="button"><span>Create Cards</span></button></Link>
        </div>
      </div>
      </Router>
    );
  }
}

export default sideBar;