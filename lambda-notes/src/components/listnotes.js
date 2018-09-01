import React, { Component } from 'react';

import NotePreview from './note-preview.js';
import './css/listnotes.css'



export default class AllNotes extends Component {
  constructor(props){
    super(props);
    console.log(this.props)
    this.state = {
      stateNotes: false,
      notes: [],
    }
  }



  render(props) {
    // console.log(this.props)
    // console.log(this.state.notes)


    return (
      <div className="allnotes">
        <h3>Your Notes:</h3>
       
         

        <div className="all-notes">
          {this.props.notes.map((note, index) => {
           
            return (
              <NotePreview
                onDrop={this.props.onDrop}
                key={index}
                index={index}
                note={note}
              />)
          })}
        </div>
      </div>
    );
  }
}
