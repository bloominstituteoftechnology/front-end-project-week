import React, { Component } from 'react';
import $ from 'jquery';
import Note from './note';

export default class NotesList extends Component {

  componentDidMount() {
  // see https://github.com/gridstack/gridstack.js/issues/735#issuecomment-329888796
  let options = {
    cellHeight: 63,
    auto: true
  };
    if ('gridstack' in $('.grid-stack')) $('.grid-stack').gridstack(options);
  }

  render() {
    return (
      <div>
        <br /><br />
        <h3>Your Notes:</h3><br />
        <div className="grid-stack">
          { 
            this.props.notes.map((note, i) => { 
              return ( 
                <div key={i} className="grid-stack-item"
                  data-gs-auto-position
                  data-gs-width="4" data-gs-height="3">
                  <div className="grid-stack-item-content"><Note key={i} { ...note } { ...this.props } /></div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
