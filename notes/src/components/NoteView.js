import React from "react";
import "./noteview.css";
import DeleteModel from "./DeleteModel";
import ExpandedNote from "./ExpandedNote";

function NoteView(props) {
  if (props.note === null) {
    return <h2>Loading Note.....</h2>;
  }
  if (props.isDeleting) {
    return (
      <>
        <DeleteModel {...props} />
        <ExpandedNote {...props} />
      </>
    );
  }
  return <ExpandedNote {...props} />;
}

export default NoteView;
