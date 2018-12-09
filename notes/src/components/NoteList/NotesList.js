// importing libraries
import React from 'react';
import styled from 'styled-components';

import { truncate } from '../../helper/helper';

// importing component
import ToolBar from './ToolBar';

// styled Notes List
const NotesWrapper = styled.div`
  padding: 4rem 4rem;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  
  .notes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .note-item {
      border: 1px solid #414141;
      margin: 2rem;
      font-size: 1.6rem;
      background-color: #FFFFFF;
      padding: 1.5rem;
      width: 25rem;
      min-height: 25rem;

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
  }

  onInputChange = (e) => {
    this.setState({
      searchText: e.target.value,
    })
  }

  render () {
    const { notes, history, fetchingNotes } = this.props;
    const { searchText } = this.state;

    return (
      <NotesWrapper>
        <h2>Notes:</h2>
        <ToolBar
          searchText = {searchText}
          onInputChange = {this.onInputChange}
        />
        <div className="notes">
          {
            fetchingNotes ?
            <div>Loading ... </div> :
            !notes[0] ?
                <div>Something has gone teribbly wrong.</div> :
                notes
                  .filter( note => (
                    note.title.toLowerCase().includes(searchText.toLowerCase())
                  ))
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