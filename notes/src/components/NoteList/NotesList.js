// importing libraries
import React from 'react';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';

import { truncate, sortNotes } from '../../helper/helper';

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
    sortValue: 'oldest',
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render () {
    const { notes, dragDrop, history, fetchingNotes } = this.props;
    const { searchText, sort, sortValue } = this.state;

    let computedNotes;

    if (!fetchingNotes && notes.length > 0) {
      computedNotes = notes.filter (
        note => note.title.toLowerCase().includes(searchText.toLowerCase())
      )
      computedNotes = sortNotes(computedNotes, sortValue);

    }

    var dragging = null;

    return (
      <NotesWrapper>
        <div className="notes-header">
          <h2>Notes:</h2>
          <ToolBar
            notes = {notes}
            searchText = {searchText}
            sortValue = {sortValue}
            onInputChange = {this.onInputChange}
            sort = {sort}
            onSortChange = {this.onSortChange}
          />
        </div>
        <div
          onDragOver={event => {
            event.preventDefault();
            var bounding = event.target.getBoundingClientRect();
            var offsetX = bounding.x + bounding.width / 2;
            if (event.clientX - offsetX > 0) {
              event.target.style["border-right"] = "solid 4px red";
              event.target.style["border-left"] = "";
            } else {
              event.target.style["border-left"] = "solid 4px red";
              event.target.style["border-right"] = "";
            }
          }}
          onDragLeave={event => {
            event.target.style["border-right"] = "";
            event.target.style["border-left"] = "";
          }}
          onDragStart={event => {
            dragging = event.target;
            console.log(event.target);
            event.dataTransfer.setData("text/html", dragging);
          }}
          onDrop={event => {
            event.preventDefault();
            console.log(event);

            if (event.target.style["border-right"] !== "") {
              event.target.style["border-right"] = "";
              dragDrop(event.target.id, dragging.id, true);
            } else {
              event.target.style["border-left"] = "";
              dragDrop(event.target.id, dragging.id, false);
            }
          }}
          className="notes"
        >
          {
            fetchingNotes ?
            <Loader style={{margin: '2rem auto'}} active inline size='massive' /> :
            !notes[0] ?
                <div>Something has gone teribbly wrong.</div> :
                computedNotes
                  .map(note => (
                  <div
                    draggable
                    className="note-item"
                    key={note._id}
                    id={note._id}
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