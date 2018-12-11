// importing libraries
import React from 'react';
import styled from 'styled-components';

import { truncate } from '../../helper/helper';

// importing component
import ToolBar from './ToolBar';

// styled Notes List
const NotesWrapper = styled.div`
  h2 {
    padding: 4rem;
    font-size: 3rem;
    padding-bottom: 2rem;
  }

  .notes-header {
    position: sticky;
    top: 0;
    background-color: #F2F1F2
  }
  
  .notes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .note-item {
      border: 1px solid #414141;
      overflow-wrap:break-word;
      margin: 2rem;
      font-size: 1.6rem;
      background-color: #FFFFFF;
      padding: 1.5rem;
      width: 25rem;
      min-height: 25rem;
      cursor: pointer;

      h3 {
        font-size: 2.2rem;
        font-weigth: bold;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid #414141;
      }
    }
  }
`;


class NotesList extends React.Component { 
  state = {
    searchText: '',
    sort: null,
  }

  onInputChange = (e) => {
    this.setState({
      searchText: e.target.value,
    })
  }

  onSortChange = () => {
    this.setState(state => ({
      sort: !state.sort ? 'asc' : state.sort === 'asc' ? 'desc' : null,
    }))
  }

  render () {
    const { notes, history, fetchingNotes } = this.props;
    const { searchText, sort } = this.state;

    let computedNotes;

    if (!fetchingNotes && notes.length > 0) {
      computedNotes = notes.filter (
        note => note.title.toLowerCase().includes(searchText.toLowerCase())
      )
      if (sort) {
        computedNotes.sort(
          (note1, note2) => {
            if (sort === 'asc') {
              return note1.title.toLowerCase() < note2.title.toLowerCase() ? -1 : 0;
            }
            return note1.title.toLowerCase() > note2.title.toLowerCase() ? -1 : 0;
          }
        )
      }
    }

    return (
      <NotesWrapper>
        <div className="notes-header">
          <h2>Notes:</h2>
          <ToolBar
            notes = {notes}
            searchText = {searchText}
            onInputChange = {this.onInputChange}
            sort = {sort}
            onSortChange = {this.onSortChange}
          />
        </div>
        <div className="notes">
          {
            fetchingNotes ?
            <div>Loading ... </div> :
            !notes[0] ?
                <div>Something has gone teribbly wrong.</div> :
                computedNotes
                  .map(note => (
                  <div
                    className="note-item"
                    key={note._id}
                    onClick = { () => {
                      history.push(`/notes/${note._id}`)
                    }}
                  >
                    <h3>{truncate(note.title, 15)}</h3>
                    <p>{truncate(note.textBody, 200)}</p>
                  </div>
                ))
          }
        </div>
      </NotesWrapper>
    );
  }
}
 
export default NotesList;