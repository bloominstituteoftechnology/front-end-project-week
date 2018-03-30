import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {} from "../actions";
import { deleteNote, reorderNotes } from "../actions";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";
import ListItem from "./ListItem";
import { Row } from "reactstrap";

const StyledNoteList = styled.div`
  width: 73%;
  background: whitesmoke;
  font-family: Roboto;
  height: 700px;

  .note-list {
    margin-top: 45px;
    margin-bottom: 20px;
    font-weight: bold;
    width: 100%;
    min-width: 125px;
  }

  .notes-empty {
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 50px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #2bc1c4;
  }

  .note-list-header {
    margin: 4%;
  }

  .row {
    margin-left: 1.8%;
    margin-right: 1.8%;
  }

  .quick-delete {
    margin: none;
    padding: none;
    position: absolute;
    margin-left: 60%;
    margin-top: 85%;
  }

`;

const SortableItem = SortableElement(({ note }) => (
    <ListItem note={note} />
));

const SortableList = SortableContainer(({ notes }) => {
  return (
   <Row className="row d-flex flex-wrap">
      {notes.map((note, index) => {
        return (
          <SortableItem
            key={`item-${note.id}`}
            index={index}
            note={note}
          />
        );
      })}
    </Row>
  );
});

class NoteList extends Component {
  state = {
    id: "",
    deleting: false,
    selectingLabel: false
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.props.reorderNotes(
      arrayMove(this.props.notes, oldIndex, newIndex),
      this.state.searching
    );
  };

  render() {
    return (
      <StyledNoteList>
        {this.props.notes.length === 0 ? (
          <div className="notes-empty">
            You don't have any notes yet, click "Create New Note" to add one!
          </div>
        ) : (
          <div className="note-list">
          <div className="note-list-header">
            Your Notes:
            </div>
            <SortableList
              notes={this.props.notes}
              pressDelay={25}
              onSortEnd={this.onSortEnd}
              axis="xy"
            />
          </div>
        )}
      </StyledNoteList>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps, { reorderNotes, deleteNote })(NoteList);
