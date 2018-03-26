import React, { Component } from 'react'

import Note from './Note';

class NotesList extends Component {
    constructor(){
        super();
        this.state = [
            {
                title: 'Note title',
                text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
            },

            {
                title: 'Note title',
                text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
            },

            {
                title: 'Note title',
                text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
            },

            {
                title: 'Note title',
                text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
            },
            {
                title: 'Note title',
                text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
            },
            {
                title: 'Note title',
                text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
            },
            {
                title: 'Note title',
                text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
            },
            {
                title: 'Note title',
                text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
            },
            {
                title: 'Note title',
                text: 'This is a note. This is a note. This is a note. This is a noe. This is a note. This is a note.',
            },
        ]
    }


  render() {
    return (
      <div className = 'notes'>
        {this.state.map((notes, index) =>{
            return <Note key = {index} notes = {notes}/>
        })}
      </div>
    )
  }
}

export default  NotesList;

