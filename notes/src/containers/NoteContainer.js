import React from "react";
import { CSVLink } from "react-csv";
import { MainContent, ListHeading, DropdownToggle } from "../styles";

import SortDropdown from "../components/SortDropdown";
import NoteList from "../components/NoteList";

import dropdown from "../assets/dropdown.svg";

const NoteContainer = ({
  notes,
  toggleSort,
  sortAToZ,
  sortZToA,
  showDropdown
}) => (
  <MainContent>
    <ListHeading>Your Notes:</ListHeading>
    <CSVLink data={notes} filename={"lambda-notes.csv"} target="_blank">
      <span style={{ marginLeft: "20px" }}>Download All Notes as CSV</span>
    </CSVLink>

    <div style={{ position: "relative", width: "0", height: "0" }}>
      <DropdownToggle
        src={dropdown}
        alt="show sort options"
        onClick={toggleSort}
      />
    </div>
    <div style={{ position: "relative", width: "0", height: "0" }}>
      <SortDropdown
        sortAToZ={sortAToZ}
        sortZToA={sortZToA}
        showDropdown={showDropdown}
      />
    </div>
    <NoteList notes={notes} />
  </MainContent>
);

export default NoteContainer;
