import React from 'react';

const Note = props => {
    return (
        <div>
            <h5>{props.location.state.currentNote.title}</h5>
            <h5>{props.location.state.currentNote.text}</h5>
        </div>
    );
}
  

export default Note;