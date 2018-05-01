import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import 'bootstrap/dist/css/bootstrap.css';
import './ListView.css';

export default class ListView extends Component {
  state = {
    notes: [],
    search: ''
  };

  updateSearch = e => {
    if (e.target.value.length < this.state.search.length) {
      this.getNotes();
      // this.filterAndChange(); // How to refilter at current value?
    }
    this.setState({ search: e.target.value });
    this.filterAndChange();
  };

  //filters the state to match values for onChange event

  filterAndChange = () => {
    let filterNotes = this.state.notes.filter(note => {
      if (
        note.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1 ||
        note.content.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
          -1
      ) {
        return true;
      }
    });
    this.setState({ notes: filterNotes });
  };

  getNotes = () => {
    const PRODUCTION_SERVER =
      'https://lambda-notes-backend-server.herokuapp.com/api/notes';
    const path =
      // production server
      PRODUCTION_SERVER ||
      // dev server
      'http://localhost:5050/api/notes';
    axios
      .get(path)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting notes: ${error}`);
      });
  };

  componentDidMount = () => {
    this.getNotes();
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex align-items-baseline mb-3">
          <h4>Your Notes:</h4>
          <nav className="navbar navbar-light">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.search}
                onChange={this.updateSearch}
              />
              <button className="btn my-2 my-sm-0 search-button" type="submit">
                Search
              </button>
            </form>
          </nav>
        </div>
        <div className="row">
          {this.state.notes.map(note => {
            return (
              <div className="col-lg-4 col-md-8 col-sm-12" key={note._id}>
                <Link
                  to={`/noteview/${note._id}`}
                  style={{ textDecoration: 'none' }}
                  className="card"
                >
                  <div className="card-block">
                    <h5 className="text-truncate card-title">{note.title}</h5>
                    <div className="text-truncate card-text">
                      {note.content}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <CSVLink className="btn mt-5 csv-button" data={this.state.notes}>
          Export Notes To CSV
        </CSVLink>
      </div>
    );
  }
}
