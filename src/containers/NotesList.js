import React from "react";
import styled from "styled-components";
import { getNotes, filterNotes, sortNotes } from "../store/actions";
import { connect } from "react-redux";
import { CSVLink } from "react-csv";
import download from "../img/download.svg";
import SingleNoteListView from "../components/SingleNoteListView";

// ==============================
// ======    COMPONENTS    ======
// ==============================

const NotesList = (props) => {

  const getNoteString = (text, limit) => {
    if (text) {
      let finalStr = "",
        str1 = text.replace(/\s+/g, " "),
        str2 = str1.split(" "),
        wordsNum = str2.length;

      if (wordsNum > limit) {
        for (let i = 0; i < limit; i++) {
          finalStr = `${finalStr} ${str2[i]} `;
        }
        return `${finalStr}...`;
      } else return text;
    } else return null;
  };


    const headers = [
      { label: "title", key: "title" },
      { label: "text body", key: "textBody" },
      { label: "ID", key: "_id" },
      { label: "Tags", key: "tags" }
    ];
    if (!props.notes || props.fetchingNotes) {
      return <h3>Retrieving Notes, One Moment...</h3>;
    }

    console.log(props.notes)
    return (
      <List>
        <Header>
          <p>
            Your Notes:&nbsp;
            <StyledCSVLink data={props.notes} headers={headers}>
              <img
                src={download}
                style={{ width: 20, marginRight: 10 }}
                alt="a sgv download icon"
              />
              CSV
            </StyledCSVLink>
            <SortSpan
              onClick={() => {
                props.sortNotes("ascending");
                props.history.push(`/notes`);
              }}
            >
              Sort A-Z
            </SortSpan>
            <SortSpan
              onClick={() => {
                props.sortNotes("descending");
                props.history.push(`/notes`);
              }}
            >
              Sort Z-A
            </SortSpan>
          </p>
        </Header>
        {!props.filteredNotes.length
          ? props.notes.map((note, i) => (
              <SingleNoteListView
                key={note._id}
                props={props}
                note={note}
                getNoteString={getNoteString}
                index={i}
                id={note._id}
                notes={props.notes}
                />
            ))
          : props.filteredNotes.map((note, i) => (
              <SingleNoteListView
                key={note._id}
                props={props}
                note={note}
                getNoteString={getNoteString}
                index={i}
                id={note._id}
                notes={props.notes}
              />
            ))}
        <IconFooter>
          <PAnchor>
            icon from{" "}
            <a
              href="https://fontawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              fontawesome.com
            </a>
          </PAnchor>
        </IconFooter>
      </List>
    );
  }

const mapStateToProps = ({ filteredNotes, notes }) => ({
  filteredNotes,
  notes
});


export default connect(
  mapStateToProps,
  { getNotes, filterNotes, sortNotes }
)(NotesList);

// ==============================
// ======   STYLED COMPS   ======
// ==============================

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 20px;
  padding-left: 350px;
  background: #f3f3f3;

  @media (max-width: 650px) {
    padding-left: 20px;
    padding-top: 300px;
    padding: 290px 15px 15px;
    flex-direction: column;
    align-items: center;
  }
`;

const Header = styled.header`
  width: 100%;

  & > p {
    color: #4a494a;
    font-size: 18px;
    padding-left: 10px;
  }
`;

const StyledCSVLink = styled(CSVLink)`
  text-decoration: none;
  color: #00c6d1;
  font-weight: bold;
  border-bottom: 2px solid #00c6d1;
  margin-left: 15px;

  &:hover {
    opacity: 0.5;
  }
`;

const SortSpan = styled.span`
  color: #00c6d1;
  border-bottom: 2px solid #00c6d1;
  margin-left: 15px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.5;
  }
`;

const PAnchor = styled.p`
  font-size: 12px;
  color: #00c6d1;
  cursor: pointer;

  & > a {
    color: #00c6d1;
    text-decoration: none;
  }
`;

const IconFooter = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 20px 0;
  margin-bottom: 0;

  @media (max-width: 650px) {
    padding: 20px 0 0 30px;
  }
`;
