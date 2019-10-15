import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../actions/actions";

import "../styles/Sidebar.css";

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <h1 className="sidebarTitle">Lambda Notes</h1>
          <div className="sidebarButton notesButton"><Link to="/">View All Notes</Link></div>
          {this.props.loggedIn ? <div className="sidebarButton notesButton"><Link to="/my-notes">View Your Notes</Link></div> : null}
          {this.props.loggedIn ? <div className="sidebarButton notesButton"><Link to="/create">+ Create New Note</Link></div> : null}
          {this.props.loggedIn ? null : <div className="sidebarButton notesButton"><Link to="/register">Register</Link></div>}
          {this.props.loggedIn ? null : <div className="sidebarButton notesButton"><Link to="/login">Login</Link></div>}
          {this.props.loggedIn ? <div className="sidebarButton notesButton" onClick={this.props.logout}><Link to="/">Logout</Link></div> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registered: state.registered,
    loggedIn: state.loggedIn
  };
};
export default connect(
  mapStateToProps
  ,
  { logout }
)(SideBar);
