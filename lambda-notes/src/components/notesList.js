import React, { Component } from 'react';
import Dragula from 'react-dragula';
import Note from './note';
import { Input } from 'reactstrap';

export default class NotesList extends Component {
  constructor() {
    super();

    this.state = {
      searchString: ''
    };
  }

  handleSearchStringChange = e => {
    this.setState({ searchString: e.target.value });
  };

  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
      let options = { };
      Dragula([componentBackingInstance], options);
    }
  };

  render() {
    let notesToDisplay;

    if (this.state.searchString.length > 0 ) {
      notesToDisplay = this.props.notes.filter(note => note.title.toLowerCase().match(this.state.searchString));
    } else {
      notesToDisplay = this.props.notes
    }
    return (
      <div>
        <br /><br />
        <h3>Your Notes:</h3><br />
        <Input onChange={this.handleSearchStringChange} placeholder="Search Notes" /><br />
        <div className="note-list container" ref={this.dragulaDecorator}>
        { 
          notesToDisplay.map((note, i) => { 
            return ( 
              <Note key={i} { ...note } { ...this.props } />
            );
          })
        }
        </div>
      </div>
    );
  }
}
