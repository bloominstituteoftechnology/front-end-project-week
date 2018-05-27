import React, { Component } from 'react';
import "../App.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

// navTo = address => {
//     props.history.push
// }
function homeLink() {
  return (window.location.href = "/");
}

class Sidebar extends Component {
    render() {
        return <div className="sidebar col-sm-3">
            <h2 className="sidebar-header">
              {" "}
              Lambda<br />Notes
            </h2>

              <button onClick={homeLink} className="mr-sm-2 ml-sm-3 mb-sm-3 sidebar-item pt-sm-1">
                View Your Notes
              </button>

            <Link to="/create">
              <button className="mr-sm-2 ml-sm-3 mb-sm-3 sidebar-item pt-sm-1">
                + Create New Note
              </button>
            </Link>
            <CSVLink data={this.props.notes}>
              <button className="mr-sm-2 ml-sm-3 mb-sm-3 sidebar-item pt-sm-1">
                Export All Notes
              </button>
            </CSVLink>
          </div>;
        }
}

const mapStateToProps = state => {
  return {
    notes: state
  };
};

export default connect(mapStateToProps, {})(Sidebar);