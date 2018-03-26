import React, { Component } from 'react';

import NoteCard from './NoteCard';

class NoteList extends Component {

    render() {
        return (
            <div className='col-9 right_side'>
              <div className='row'>
                <div className='col title_bar'>
                  <h4>Your Notes:</h4>
                </div>
              </div>
              <div className='row'>
                <div className='col note_box'>
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
                </div>
              </div>
            </div>
        )
    }
}

export default NoteList;
