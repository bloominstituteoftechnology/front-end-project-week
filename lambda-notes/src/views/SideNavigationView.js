// React imports
import React, { Component } from 'react';
// CSS imports
import './SideNavigationView.css';
// Redux imports
import { connect } from 'react-redux';
// React Router import
// import { route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Action imports
import { searchNotes } from '../actions';

class SideNavigationView extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
  }

  handleChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
    this.props.searchNotes(this.state.searchTerm);
  };

  render() {
    return (
      <header className="mainNav">
        <h1>
          <Link to="/" className="navLink">
            Lambda
            <br />
            Notes
          </Link>
        </h1>
        <Link to="/" className="navLink">
          <button>View Your Notes</button>
        </Link>
        <Link to="/add-notes-form" className="navLink">
          <button>+ Create New Note</button>
        </Link>
        <input
          type="text"
          placeholder="Search Notes"
          className="searchBar"
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </header>
    );
  }
}

const mapStateToProps = ({ searchTerm }) => {
  return {
    searchTerm
  };
};

export default connect(
  mapStateToProps,
  { searchNotes }
)(SideNavigationView);
