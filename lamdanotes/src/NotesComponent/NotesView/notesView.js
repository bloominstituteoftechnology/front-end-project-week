import React from 'react';

import NotesIterator from './notesIterator';

//props from app.js
//notes={this.state.notes}

const NotesView = props => {
    console.log("props from notesView", props)
    return (
        <div className="notesView">
            <h5 className="nvTitle">Your Notes:</h5><br />
            <NotesIterator notes={props.notes} />
        </div>
    )
}

export default NotesView