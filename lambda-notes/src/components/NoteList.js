import React, { Component } from 'react';

import NoteCard from './NoteCard';

class NoteList extends Component {

    render() {
        return (
            <div className='col-8 right_side'>
              <div className='row title_bar'>
                <div className='col-3 header_font'>
                  <h4>Your Notes:</h4>
                </div>
              </div>
              <div className='row'>
                <div className='col note_box'>
                    {this.props.notes.map(note => {
                        return (<NoteCard note={note} key={note.id} />)
                    })}
                </div>
              </div>
            </div>
        )
    }
}

export default NoteList;
