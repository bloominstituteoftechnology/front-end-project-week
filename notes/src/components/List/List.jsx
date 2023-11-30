import React, { useEffect, useState } from 'react';
import NoteCard from '../NoteCard/NoteCard';
import {
  StyledView,
  ListTitle,
  StyledListDiv,
  StyledNoteLink,
  SearchBar,
  SearchInput,
  NewOldButton,
  NewOldMobileButton,
} from './styles';
import { listNotes } from '../../notesService.js';

const List = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');
  const [sortReverse, setSortReverse] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    listNotes().then(res => {
      setNotes(res.data.notes);
    }).catch(error => {
      console.error('Server Error', error);
      setError(error);
    });
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredNotes = () => {
    return notes.filter(
      (note) => note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.textBody.toLowerCase().includes(search.toLowerCase()));
  };

  const getSortButtonText = () => {
    return sortReverse ? 'Old → New' : 'New → Old';
  };

  const getMobileSortButtonText = () => {
    return sortReverse ? 'Oldest' : 'Newest';
  };

  const handleSortToggle = () => {
    setSortReverse(!sortReverse);
  };

  const handleSort = (arr) => {
    return sortReverse ? arr.reverse() : arr;
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return notes.length === 0 ? <ListTitle>Loading your notes...</ListTitle> : (
    <StyledView>
      <SearchBar>
        <SearchInput
          name="search"
          placeholder="Search"
          onChange={handleChange}
          value={search}
        />
        <NewOldButton onClick={handleSortToggle}>
          {getSortButtonText()}
        </NewOldButton>
        <NewOldMobileButton onClick={handleSortToggle}>
          {getMobileSortButtonText()}
        </NewOldMobileButton>
      </SearchBar>
      <ListTitle>Your Notes:</ListTitle>
      <StyledListDiv>
        {handleSort(filteredNotes().
          map((note) => (<StyledNoteLink to={`/note/${note.id}`} key={note.id}>
              <NoteCard note={note} />
            </StyledNoteLink>
          )))}
      </StyledListDiv>
    </StyledView>
  );
};

export default List;
