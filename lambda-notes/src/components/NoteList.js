import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {} from '../actions';
import { deleteNote, reorderNotes, getNotes } from '../actions';
import ListItem from './ListItem';

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
    width: 110px;
  }

  .notes {
    display: flex;
    flex-wrap: wrap;
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

class NoteList extends Component {
  componentDidMount() {
    this.props.getNotes();
    console.log('NoteList this.state', this.state);
  }

  render() {
    console.log('NoteList render this.props', this.props);
    return (
      <StyledNoteList>
        {this.props.notes.length === 0 ? (
          <div className="notes-empty">
            You don't have any notes yet, click "Create New Note" to add one!
          </div>
        ) : (
          <div className="note-list">
            <div className="note-list-header">Your Notes:</div>
            <ul className="notes">
              {this.props.notes.map(note => {
                return (
                  <ListItem notes={this.props.api} note={note} />
                );
              })}
            </ul>
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

export default connect(mapStateToProps, { reorderNotes, deleteNote, getNotes })(
  NoteList
);
