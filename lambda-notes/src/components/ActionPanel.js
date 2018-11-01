import React from "react";

// Auxillary Packages
import { connect } from "react-redux";

// Purgatorial Packages
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import Cookies from "js-cookie";

// CSS
import "../CSS/ActionPanel.css";

class ActionPanel extends React.Component {
  handleLogout = e => {
    Cookies.remove("token");
    localStorage.setItem("isLoggedIn", false);
    const location = window.location.href.split("/");
    location[location.length - 1] = "login";
    window.location.href = location.join("/");
  };
  render() {
    return (
      <React.Fragment>
        <h2 className="action-panel-title">Lambda Notes</h2>
        <Link className="btn link my-3" to="/">
          View Your Notes
        </Link>
        <Link className="btn link my-3" to="/newNote">
          New Note
        </Link>
        <CSVLink
          className="btn link my-3"
          filename={"lambda-notes.csv"}
          data={this.props.notes}
        >
          Dowload Notes
        </CSVLink>
        <Link className="btn link my-3" to="/" onClick={this.handleLogout}>
          Logout
        </Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(ActionPanel);
