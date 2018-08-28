import React, {
  Component
} from "react"


const SingleNote = (props) => {
    const note = props.notes.find((each) => {
      return each.id == props.match.params.id
    })
    console.log("notes", props.match.params.id, props.notes)
    return ( <
      div >
      test
      {note.title}
      <
      /div>);
    };

    export default SingleNote;
