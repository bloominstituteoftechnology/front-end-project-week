import React, { Component } from "react";
import styled from "styled-components";
import { getNotes, filterNotes, sortNotes } from "../store/actions";
import { connect } from "react-redux";
import { CSVLink } from "react-csv";
import download from "../img/download.svg";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import SingleNoteListView from "../components/SingleNoteListView";
const update = require("immutability-helper");

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

// ==============================
// ======    COMPONENTS    ======
// ==============================

class NotesList extends Component {
  state = {
    noteString: ""
  };
  componentDidMount = () => {
    getNotes();
    this.getNoteString();
  };

  getNoteString = (text, limit) => {
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

  moveNote = (dragIndex, hoverIndex) => {
    const { notes } = this.props.notes;
    const dragCard = notes[dragIndex];

    this.setState(
      update(this.state, {
        notes: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        }
      })
    );
  };

  render() {
    const headers = [
      { label: "title", key: "title" },
      { label: "text body", key: "textBody" },
      { label: "ID", key: "_id" },
      { label: "Tags", key: "tags" }
    ];
    if (!this.props.notes || this.props.fetchingNotes) {
      return <h3>Retrieving Notes, One Moment...</h3>;
    }
    return (
      <List>
        <Header>
          <p>
            Your Notes:&nbsp;
            <StyledCSVLink data={this.props.notes} headers={headers}>
              <img
                src={download}
                style={{ width: 20, marginRight: 10 }}
                alt="a sgv download icon"
              />
              CSV
            </StyledCSVLink>
            <SortSpan
              onClick={() => {
                this.props.sortNotes("ascending");
                this.props.history.push(`/notes`);
              }}
            >
              Sort A-Z
            </SortSpan>
            <SortSpan
              onClick={() => {
                this.props.sortNotes("descending");
                this.props.history.push(`/notes`);
              }}
            >
              Sort Z-A
            </SortSpan>
          </p>
        </Header>
        {!this.props.filteredNotes.length
          ? this.props.notes.map((note, i) => (
              <SingleNoteListView
                key={note._id}
                props={this.props}
                note={note}
                getNoteString={this.getNoteString}
                index={i}
                id={note._id}
                moveNote={this.moveNote}
                notes={this.state.notes}
              />
            ))
          : this.props.filteredNotes.map((note, i) => (
              <SingleNoteListView
                key={note._id}
                props={this.props}
                note={note}
                getNoteString={this.getNoteString}
                index={i}
                id={note._id}
                moveNote={this.moveNote}
                notes={this.state.notes}
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
}

const mapStateToProps = ({ filteredNotes, notes }) => ({
  filteredNotes,
  notes
});

const draggable = DragDropContext(HTML5Backend)(NotesList);

export default connect(
  mapStateToProps,
  { getNotes, filterNotes, sortNotes }
)(draggable);
