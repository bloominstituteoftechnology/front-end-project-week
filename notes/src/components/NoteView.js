import React from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const NoteView = () => {
  return (
    <div>
      <div>
        <Link to="/editview">Edit</Link>
        <DeleteModal />
      </div>{" "}
      <div>
        <h1>Given a title props, update this for Note Name</h1>
        <p>Given a content props, update this for content</p>
      </div>
    </div>
  );
};

export default NoteView;
