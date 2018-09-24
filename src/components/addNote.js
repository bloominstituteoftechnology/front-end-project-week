import React from "react";
import SideBar from "./sidebar";
import AddNoteForm from "./addNoteForm";

export const AddNote = () => {
  return (
    <div className={"container"}>
      <SideBar />
      <AddNoteForm />
    </div>
  );
};


