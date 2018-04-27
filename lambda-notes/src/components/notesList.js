import React, { Component } from 'react';
import Dragula from 'react-dragula';
import Note from './note';
import { Input } from 'reactstrap';

export default class NotesList extends Component {
  constructor() {
    super();

    this.state = {
      searchString: '',
      sortBy: 'Id Asc'
    };

    this.sortByFunctions = {
      'Id Asc': this.sortByIdAsc,
      'Id Desc': this.sortByIdDesc,
      'Title Asc': this.sortByTitleAsc,
      'Title Desc': this.sortByTitleDesc
    };
  }


  handleSearchStringChange = e => {
    this.setState({ searchString: e.target.value });
  };

  handleSortDropDown = e => {
    this.setState({ sortBy: e.target.innerText });
  }

  notesToDisplay = () => {
    return this.props.notes
      .sort(this.getSortFunction())
      .filter(note => note.title
        .match(this.state.searchString) 
        || note.tags.match(this.state.searchString)
        || note.content.match(this.state.searchString)
      );
  }

  getSortFunction = () => {
    return this.sortByFunctions[this.state.sortBy];
  };

  sortByIdAsc = (a, b) => {
    return a.id - b.id;
  }

  sortByIdDesc = (a, b) => {
    return b.id - a.id;
  }

  sortByTitleAsc = (a, b) => {
    a = a.title.toUpperCase();
    b = b.title.toUpperCase();

    if (a < b) return -1;
    if (a > b) return 1;

    return 0;
  }

  sortByTitleDesc = (a, b) => {
    a = a.title.toUpperCase();
    b = b.title.toUpperCase();

    if (a < b) return 1;
    if (a > b) return -1;

    return 0;
  }

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };

  render() {
    return (
      <div>
        <br /><br />
        <h3>Your Notes:</h3><br />
        <Input className="search-bar" onChange={this.handleSearchStringChange} placeholder="Search Notes" /><br />
        <div className="dropdown">
          <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            { `Sort by: ${this.state.sortBy}`} 
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a onClick={this.handleSortDropDown} className="dropdown-item">Id Asc</a>
            <a onClick={this.handleSortDropDown} className="dropdown-item">Id Desc</a>
            <a onClick={this.handleSortDropDown} className="dropdown-item">Title Asc</a>
            <a onClick={this.handleSortDropDown} className="dropdown-item">Title Desc</a>
          </div>
        </div>
        <br />
        <div className="note-list" ref={this.dragulaDecorator}>
        { 
          this.notesToDisplay().map((note, i) => { 
            return ( 
              <Note key={i} note={note} updateClickedNote={this.props.updateClickedNote} />
            );
          })
        }
        </div>
      </div>
    );
  }
}
