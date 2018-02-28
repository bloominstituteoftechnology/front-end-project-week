import React from 'react';

const NoteView = (props) => {
    console.log("NoteView props: ", props);
    return (
      <div>
        <h1>
        {props.notes[props.match.params.id].title}
        </h1>
        <div>
        {props.notes[props.match.params.id].body}
        </div>
      </div>
    )
}

export default NoteView;