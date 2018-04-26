import React, { Component } from 'react';

import Note from './note';

export default class NotesList extends Component {

  render() {
    return (
      <div>
        <br /><br />
        <h3>Your Notes:</h3><br />
        {/* <div className="note-list"> */}
          {/* { this.props.notes.map( (note, i) => <Note key={i} { ...note } { ...this.props } /> ) } */}

          <div className="grid-stack">
            { this.props.notes.map( (note, i) => { 
    console.log("!!!!!!!!!!!!!!!!!!", 'GOT HERE', i);
              return ( 
                  <div key={i} className="grid-stack-item"
                    data-gs-auto-position
                    data-gs-width="4" data-gs-height="3">
                    <div className="grid-stack-item-content"><Note key={i} { ...note } { ...this.props } /></div>
                  </div>
              );
            }) }
          </div>



          
        {/* </div> */}
      </div>
    );
  }

}
