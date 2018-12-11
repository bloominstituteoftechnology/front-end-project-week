import React from 'react';
import styled from 'styled-components';

const NotesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 23%;
  padding-top: 40px;
`;

const DivNotes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 20px;
`;

const StyledNote = styled.div`
  border: 1px solid black;
  background-color: #ffffff;
  padding: 10px 15px;
  width: 28.5%;
  margin: 5px;
  height: 15rem;
  overflow: hidden;
  text-align: left;
  white-space: pre-wrap;

  h2 {
    font-weight: bold;
  }
`;

const Notes = props => {
  //console.log('notes', props);

  return (
    <NotesWrapper>
      <h2>Your Notes:</h2>
      <form onSubmit={e => props.clearSearchText()}>
        <input
          type="text"
          placeholder="search"
          value={props.searchText}
          onChange={e => props.searchNotes(e)}
        />
      </form>
      <DivNotes>
        {props.notes.map(note => (
          <StyledNote
            key={note._id}
            onClick={() => props.history.push(`/note/${note._id}`)}>
            <h2>{note.title}</h2>
            <hr />
            <p>{note.textBody}</p>
            {/*</Link>*/}
          </StyledNote>
        ))}
      </DivNotes>
    </NotesWrapper>
  );
};

export default Notes;
