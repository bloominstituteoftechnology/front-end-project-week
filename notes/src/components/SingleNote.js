import React from "react";

const SingleNote = props => {
  let note = props.notes.find(
    (note, i) => `${note.id}` === props.match.params.id
  );
  console.log(props.notes);
  console.log(props.match.params.id);
  console.log(note);
  if (props.notes.length) {
    return (
      <div>
        <p> edit delete</p>
        <h2 />
        <p />
      </div>
    );
  } else {
    return <h2>Loading Note...</h2>;
  }
};

export default SingleNote;
