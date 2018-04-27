import React, { Component } from 'react';
import $ from 'jquery';
import Note from './note';
import { Input } from 'reactstrap';

export default class NotesList extends Component {
  constructor() {
    super();

    this.state = {
      searchString: ''
    };
  }

  componentDidMount() {
  // see https://github.com/gridstack/gridstack.js/issues/735#issuecomment-329888796
  let options = {
    cellHeight: 63,
    auto: true
  };
    if ('gridstack' in $('.grid-stack')) $('.grid-stack').gridstack(options);
  }

  handleSearchStringChange = e => {
    this.setState({ searchString: e.target.value });
  };

  componentDidUpdate() {
    console.log('component did update');
    if ('gridstack' in $('.grid-stack')) $('.grid-stack').gridstack();
  }

  refreshGrid() {
    console.log('DID REFRESH!!!!!!!!!!!!!')
    // if ('gridstack' in $('.grid-stack')) $('.grid-stack').gridstack();
    let grid = $('.grid-stack').gridstack();
  }

  render() {
    let notesToDisplay;

    if (this.state.searchString.length > 0 ) {
      notesToDisplay = this.props.notes.filter(note => note.title.toLowerCase().match(this.state.searchString));
    } else {
      notesToDisplay = this.props.notes
      // console.log('zero length. props.notes is', notesToDisplay);
    }
    return (
      <div>
        <br /><br />
        <h3>Your Notes:</h3><br />
        <Input onChange={this.handleSearchStringChange} placeholder="Search Notes" /><br />
        <div className="grid-stack">
          { console.log("NOTES TO DISPLAY", notesToDisplay) }

          { 
            notesToDisplay.map((note, i) => { 
              return ( 
                <div key={i} className="grid-stack-item"
                  data-gs-auto-position
                  data-gs-width="4" data-gs-height="3">
                  <div className="grid-stack-item-content"><Note key={i} { ...note } { ...this.props } /></div>
                </div>
              );
            })
          }
          { this.refreshGrid() }
        </div>
      </div>
    );
  }
}
