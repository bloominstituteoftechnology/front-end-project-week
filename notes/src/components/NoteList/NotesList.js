// importing libraries
import React from 'react';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';

import { sortNotes } from '../../helper/helper';

// importing component
import ToolBar from './ToolBar';
import NoteCard from './NoteCard';

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
  }
`;

class NotesList extends React.Component { 
  state = {
    searchText: '',
    sort: null,
    sortValue: 'oldest',
    dragging: null,
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onDragLeave = (e) => {
    e.target.style["border-right"] = "";
    e.target.style["border-left"] = "";
  }

  onDragOver = (e) => {
    e.preventDefault();
    var bounding = e.target.getBoundingClientRect();
    var offsetX = bounding.x + bounding.width / 2;
    if (e.clientX - offsetX > 0) {
      e.target.style["border-right"] = "solid 4px red";
      e.target.style["border-left"] = "";
    } else {
      e.target.style["border-left"] = "solid 4px red";
      e.target.style["border-right"] = "";
    }
  }

  onDragStart = event => {
    this.setState({ dragging: event.target })
  }

  onDrop = event => {
    event.preventDefault();
    if (event.target.style["border-right"] !== "") {
      event.target.style["border-right"] = "";
      this.props.dragDrop(event.target.id, this.state.dragging.id, true);
    } else {
      event.target.style["border-left"] = "";
      this.props.dragDrop(event.target.id, this.state.dragging.id, false);
    }
  }

  render () {
    const { notes, history, fetchingNotes } = this.props;
    const { searchText, sort, sortValue } = this.state;

    let computedNotes;

    if (!fetchingNotes && notes.length > 0) {
      computedNotes = notes.filter (
        note => note.title.toLowerCase().includes(searchText.toLowerCase())
      )
      computedNotes = sortNotes(computedNotes, sortValue);

    }

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
          onDragOver={this.onDragOver}
          onDragLeave={this.onDragLeave}
          onDragStart={this.onDragStart}
          onDrop={this.onDrop}
          className="notes"
        >
          {
            fetchingNotes ?
            <Loader style={{margin: '2rem auto'}} active inline size='massive' /> :
            !notes[0] ?
                <div>Something has gone teribbly wrong.</div> :
                computedNotes
                  .map(note => <NoteCard note={note} history={history} />)
          }
        </div>
      </NotesWrapper>
    );
  }
}
 
export default NotesList;