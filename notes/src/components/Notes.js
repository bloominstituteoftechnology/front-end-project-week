import React from 'react';
//import styled from 'styled-components';
//import {StyledInput} from './NoteForm';
import {
  NotesWrapper,
  SearchBar,
  DivNotes,
  StyledNote,
  //StyledInput,
} from '../styles';

/*
 *const NotesWrapper = styled.div`
 *  display: flex;
 *  flex-direction: column;
 *  text-align: left;
 *  //margin-left: 28%;
 *  //margin-left: 300px;
 *  padding-top: 6rem;
 *  //--marg: calc(100% - 195px);
 *  //margin-left: calc(var(--marg) / 2);
 *  margin-left: 300px;
 *  //margin-right: calc(var(--marg) / 2);
 *
 *  @media (max-width: 800px) {
 *    align-items: center;
 *    margin-left: 275px;
 *  }
 *
 *  @media (max-width: 600px) {
 *    margin: 0 auto;
 *  }
 *
 *  form {
 *    padding-left: 3%;
 *    width: 80%;
 *
 *    @media (max-width: 600px) {
 *      padding-left: 0;
 *    }
 *  }
 *`;
 *
 *const SearchBar = styled(StyledInput)`
 *  width: 50%;
 *  //@media (max-width: 600px) {
 *  width: 100%;
 *  }
 *`;
 *
 *const DivNotes = styled.div`
 *  display: flex;
 *  flex-direction: row;
 *  flex-wrap: wrap;
 *  padding-top: 20px;
 *  justify-content: space-evenly;
 *
 *  @media (max-width: 750px) {
 *    flex-direction: column;
 *    align-items: center;
 *  }
 *`;
 *
 *const StyledNote = styled.div`
 *  border: 1px solid #cecece;
 *  background-color: #ffffff;
 *  padding: 10px 15px;
 *  width: 25%;
 *  min-width: 100px;
 *  //margin: 1.2rem 1.5%;
 *  margin: 1.2rem 0;
 *  height: 17.5rem;
 *  overflow: hidden;
 *  text-align: left;
 *  white-space: pre-wrap;
 *
 *  @media (min-width: 1200px) {
 *    width: 18%;
 *  }
 *  @media (max-width: 850px) {
 *    width: 40%;
 *  }
 *
 *  @media (max-width: 750px) {
 *    width: 90%;
 *    ////margin-left: 220px;
 *  }
 *
 *  @media (max-width: 600px) {
 *    //margin-left: 220px;
 *    width: 80%;
 *    //margin: 0;
 *  }
 *
 *  h2 {
 *    font-weight: bold;
 *  }
 *`;
 *
 */
const Notes = props => {
  //console.log('notes', props);

  console.log(props);
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
            {/*</Link>*/}
          </StyledNote>
        ))}
      </DivNotes>
    </NotesWrapper>
  );
};

export default Notes;
