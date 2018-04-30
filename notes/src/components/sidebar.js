import React from "react";
import { CSVLink } from "react-csv";

const SideBar = props => {
  return (
    <div className="sidebar-div">
      <h1>Cruise Notes</h1>
      <div
        className="view-notes-button button"
        onClick={() => props.changeToList()}
      >
        View Your Notes
      </div>
      <div
        className="create-note-button button"
        onClick={() => props.changeToCreate()}
      >
        + Create New Note
      </div>
      <CSVLink data={props.notes} className="csv-button button">
        Download CSV
      </CSVLink>
      {/* <div
        className="delete-notes-button button"
        onClick={() => props.removeAllNotes()}
      >
        Delete All Notes
      </div> */}
    </div>
  );
};

export default SideBar;
