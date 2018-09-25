import React from "react";
import SideBar from "../sidebar";
import AddNoteForm from "./addNoteForm";

export const AddNote = (props) => {
  return (
    <div className={"container"}>
      <SideBar />
      <AddNoteForm {...props} />
    </div>
  );
};


