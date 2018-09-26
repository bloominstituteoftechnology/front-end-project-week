import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

import logo from '/Users/josephbradley/Desktop/practice-dir/front-end-project-week/lambdanotes/src/assets/lambda.png';





class sideBar extends Component {
  render() {
    return (
      <div className="side-bar-container">
      <img src={logo} className="Lambda-logo" alt="logo" />
      <h2 className="notes"> Notes </h2>
        <div className="view-button">
          <Link to ="/viewcards"><button className="button"><span>View Cards</span></button></Link>
        </div>
        <div className="create-button">
         <Link to = "/createcards"><button className="button"><span>Create Cards</span></button></Link>
        </div>
      </div>
    );
  }
}

export default sideBar;