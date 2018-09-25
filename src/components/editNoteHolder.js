import React from "react";
import SideBar from "./sidebar";
import EditNote from "./editNote";

const EditNoteHolder = props => {
  return (
    <div>
      <SideBar />
      <EditNote {...props} />
    </div>
  );
};

export default EditNoteHolder