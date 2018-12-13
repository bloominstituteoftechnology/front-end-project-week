import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  NotesWrapper,
  SearchBar,
  SearchBarWrapper,
  DivNotes,
  StyledNote,
  HeaderDiv,
  ExportButton,
  SortSelect,
  ClearFilter,
} from '../styles';

const Notes = props => {
  return (
    <NotesWrapper>
      <ExportButton onClick={() => props.export()}>Export to CSV</ExportButton>
      <SearchBarWrapper>
        <h2>Your Notes:</h2>
        <form onSubmit={e => props.clearSearchText(e)}>
          <SearchBar
            type="text"
            placeholder="search"
            value={props.searchText}
            onChange={e => props.searchNotes(e)}
          />
        </form>
        <div>
          Displaying <strong>0 of 10 </strong>
          notes.
          <ClearFilter onClick={e => props.clearSearchText(e)}>
            Show All
          </ClearFilter>
        </div>
        <form>
          <label for="sort">Sort:</label>
          <SortSelect id="sort" onClick={e => props.changeSort(e)}>
            <option value="none">None</option>
            <option value="time">Recent</option>
            <option value="alpha">Alpha</option>
            <option value="length">Length</option>
          </SortSelect>
        </form>
      </SearchBarWrapper>
      <DivNotes>
        {props.notes.map(note => (
          <StyledNote
            key={note._id}
            onClick={() => props.history.push(`/note/${note._id}`)}>
            <HeaderDiv>
              <h2>{note.title}</h2>
            </HeaderDiv>
            <hr />
            <ReactMarkdown source={note.textBody} />
          </StyledNote>
        ))}
      </DivNotes>
    </NotesWrapper>
  );
};

export default Notes;
