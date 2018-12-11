import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div className="sideBar">
        <h1 className="sideBar__headline">
          Lambda
          <br />
          Notes
        </h1>
        <div className="link-section">
          <a className="nav__btn" href="/">
            View Your Notes
          </a>
          <a className="nav__btn" href="/submit">
            Create New Note
          </a>
        </div>
      </div>
    );
  }
}



export default Nav;