import React from "react";
import { CSVLink } from "react-csv";
import { MainContent, ListHeading } from "../styles";
import NoteList from "../components/NoteList";

const NoteContainer = ({ notes }) => (
  <MainContent>
    <ListHeading>Your Notes:</ListHeading>
    <CSVLink
      data={notes}
      filename={"lambda-notes.csv"}
      target="_blank"
    >
      <span style={{marginLeft: "20px"}}>Download All Notes as CSV</span> 
    </CSVLink>
    <NoteList notes={notes} />
  </MainContent>
);

export default NoteContainer;
