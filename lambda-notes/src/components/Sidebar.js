import React from "react";
import { Link } from "react-router-dom";

import { Route } from "react-router-dom";

import TagList from "./TagList";

class Sidebar extends React.Component {
  //removes username from local storage (required for 'login') and forces a window refresh to kick the user back to the login page
  logout = () => {
    localStorage.removeItem("note_token");
    window.location.reload();
  };

  render() {
    return (
      <div className="sidebar">
        <h1>Lambda Notes</h1>
        {/* added this onClick to give the user the ability to either go to the list view or refresh the list no matter which page they're on */}
        <Link to="/">
          <button onClick={this.props.getNoteList}>View Your Notes</button>
        </Link>
        <Link to="/create_new_note">
          <button>+ Create New Note</button>
        </Link>
        <button className="logout-button" onClick={this.logout}>
          Logout
        </button>
        <Route
          exact
          path="/"
          render={ownProps => (
            <TagList
              {...ownProps}
              tags={this.props.tags}
              filterByTag={this.props.filterByTag}
            />
          )}
        />
      </div>
    );
  }
}

export default Sidebar;
