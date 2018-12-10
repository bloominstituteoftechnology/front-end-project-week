import React, {Fragment} from "react";

const NotesList = props => {
    console.log('rendering NotesList component');
  if (!props.notes || props.isFetching) {
    return <h4>Loading items...</h4>;
  }
  return (
    <Fragment>
        <h2>Your Notes:</h2>
        <ul>
          {props.notes.map(note => {
            return (
              <div
                className="note"
                onClick={() => props.history.push(`/notes/${note.id}`)}
              >
                <h3 className='note-title'>{note.title}</h3>
                <p>{note.textBody}</p>
              </div>
            );
          })}
        </ul>
      </Fragment>
  );
};

export default NotesList;