import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './SideBar.css';

// import logo from '/lambdanotes/src/assets/lambdalogo.png';





class sideBar extends Component {
  render() {
    return (
      <Router>
      <div className="side-bar-container">
      <span>logo</span>
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