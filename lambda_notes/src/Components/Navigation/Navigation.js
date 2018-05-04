import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.setState({ notes: this.props.notes });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.clear();
  }

  render() {
    return (
      <div className="navDiv">
        <h2>Lambda Notes</h2>
        <Nav vertical>
          <Link to="/list" className="addNavLinks homeLink">
            View Your Notes
          </Link>

          <Link to="/add" className="addNavLinks">
            + Create New Note
          </Link>

          <Link
            to="/"
            className="addNavLinks csvBtn"
            // onClick={this.downloadCSV()}
          >
            Download CSV
          </Link>

          <Link to="/" className="addNavLinks" onClick={this.logout}>
            Log Out
          </Link>
        </Nav>
      </div>
    );
  }
}

export default Navigation;
