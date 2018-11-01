import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotesContainer = styled.div`
  border: 1px solid black;
  margin-left: 300px;
  margin-top: -610px;
`;

const Heading = styled.h2`
  display: flex;
  margin-left: 30px;
`;

const NotesDisplay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const NoteCard = styled.div`
  border: 1px solid gray;
  width: 225px;
  height: 200px;
  margin-left: 60px;
  margin-top: 30px;
`;

const NoteTitle = styled.h3`
  border-bottom: 1px solid gray;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
  color: black;
`;

const NoteBody = styled.p`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
  color: gray;
`;

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      search: ''
    }
  }

  searchHandler = event => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  }
  
  render() {
    return (
      <NotesContainer>
        <Heading>Your Notes:</Heading>
        <form> 
          <input
            type='text'
            name='search'
            placeholder='search'
            value={this.state.search}
            onChange={this.searchHandler}
          />
        </form>
        <NotesDisplay>
          {this.props.notes.map(note => {
            return (
              <Link to={`/note/${note.id}`}>
                <NoteCard
                  key={note.id}
                  style={{ textDecoration: 'none' }}
                >
                  <NoteTitle
                    // key={note._id}
                  >
                    {note.title}
                  </NoteTitle>
                  <NoteBody
                    // key={note._id}
                  >
                    {note.textBody}
                  </NoteBody>
                </NoteCard>
              </Link>
            );
          })}
        </NotesDisplay>
      </NotesContainer>
    );
  }
}

export default Notes;