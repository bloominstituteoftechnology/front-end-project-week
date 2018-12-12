import React from 'react';
import {NotesWrapper, SearchBar, DivNotes, StyledNote} from '../styles';

const Notes = props => {
  return (
    <NotesWrapper>
      <form onSubmit={e => props.clearSearchText(e)}>
        <h2>Your Notes:</h2>
        <button onClick={() => props.export()}>export to csv</button>
        <SearchBar
          type="text"
          placeholder="search"
          value={props.searchText}
          onChange={e => props.searchNotes(e)}
        />
        <select onClick={e => props.changeSort(e)}>
          <option value="none">...</option>
          <option value="time">Recent</option>
          <option value="alpha">Alpha</option>
          <option value="length">Length</option>
        </select>
      </form>
      <DivNotes>
        {props.notes.map(note => (
          <StyledNote
            key={note._id}
            onClick={() => props.history.push(`/note/${note._id}`)}>
            <div style={{maxHeight: '30px', overflow: 'hidden'}}>
              <h2>{note.title}</h2>
            </div>
            <hr />
            <p>{note.textBody}</p>
          </StyledNote>
        ))}
      </DivNotes>
    </NotesWrapper>
  );
};

export default Notes;
