import React, { Component} from 'react';
import './SideBar.css';





class sideBar extends Component {
  render() {
    return (
      <div className="side-bar-container">
      <img src='/Users/josephbradley/Desktop/practice-dir/front-end-project-week/lambdanotes/public/lambda.png' alt="Lambda"/>
        <div className="view-button">
          <button>View Cards</button>
        </div>
        <div className="create-button">
          <button>+ Create Cards</button>
        </div>
      </div>
    );
  }
}

export default sideBar;