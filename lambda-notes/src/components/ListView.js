import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './ListView.css';

export default class ListView extends Component {
  state = {
    notes: [],
    titles: [],
    search: ''
  };

  updateSearch = e => {
    if (e.target.value.length < this.state.search.length) {
      this.getNotes();
      this.filterAndChange();
      if (e.target.value.length === 0) {
        this.getNotes();
      }
    }
    this.setState({ search: e.target.value });

    //filter the state to match values for onChange

    this.filterAndChange();

  };

  filterAndChange = () => {
    let filterNotes = this.state.notes.filter(note => {
      if (
        note.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      ) {
        return true;
      } else
    });

    this.setState({ notes: filterNotes });
  };

  getNotes = () => {
    axios
      .get('http://localhost:5000/notes')
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
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
        <h4>Your Notes:</h4>
        <div className="row">
          {this.state.notes.map(note => {
            return (
              <div className="col-lg-4 col-md-8 col-sm-12" key={note.id}>
                <Link
                  to={`/noteview/${note.id}`}
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
      </div>
    );
  }
}
