import React, { Component } from 'react';
import styled from 'styled-components';

const NoteDiv = styled.div`
  display: flex;
  width: 780px;
  max-width: 870px;
  justify-content: flex-start;
`
const NoteListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  margin: 10px 40px;

  div {
    display: flex;
    flex-wrap: wrap;
  }

  input {
    align-self: flex-end;
    width: 200px;
    margin-right: 50px;
  }
`;

const IndividualNoteDiv = styled.div`
  flex-direction: column;
  align-items: flex-start;
  max-width: 250px;
  width: 25%;
  height: 200px;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid lightgray;
  overflow-y: auto;
  overflow-x: hidden;
  word-wrap: break-word;
  overflow-wrap: break-word;
  text-overflow: ellipsis

  p {
    border-top: 1px solid lightgray;
    text-align: start;
    line-height: 30px;
    font-size: 12px;
    text-overflow: ellipsis
  }

  h3 {
    margin: 0;
  }
`;

const ExpandedIndividualNoteDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 40px;
  width: 780px;
  max-width: 870px;
  word-wrap: break-word;
  white-space: pre-line;
  text-overflow: ellipsis

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
      border: none;
      text-decoration: underline;
      font-weight: bold;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
  }
`;

const Popup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`;

const InnerPopup = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
  height: 200px;

  p {
    margin-top: 60px;
  }
`;

const ModifyNoteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 10px 40px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;


const TextInput = styled.input`
  width: 400px;
  height: 30px;
  border: 1px solid gray;
  margin-bottom: 5px;
`

const ContentInput = styled.textarea`
  width: 600px;
  height: 400px;
  border: 1px solid gray;
  margin-bottom: 5px;
  line-height:40px;
`

const Button = styled.button`
  width: 180px;
  height: 40px;
  padding: 0.25em 1em;
  background: #0ABAB5;
  color: white;
  font-weight: bold;
  border: 1px solid gray;
  margin-right: 10px;
`;

function Note (props) {
  const { notes, filteredNotes, alert, fetchNote, viewNote, viewDeleteNote, viewEditNote, selectedNote, addNote, editNote, deleteNote, noSearch, searchNote, isFetched, isAdded, isView, isDeleted, isEditted, isSearched } = props;

  return (
    <NoteDiv>
      { isFetched
          ? <NoteList 
              notes={notes} 
              filteredNotes={filteredNotes}
              viewNote={viewNote} 
              isSearched={isSearched}
              noSearch={noSearch}
              searchNote={searchNote}
            />
          : <div></div>
      }
      {
        isView
          ? <IndividualNote 
              selectedNote={selectedNote} 
              viewEditNote={viewEditNote} 
              viewDeleteNote={viewDeleteNote} 
            />  
          : <div></div>
      }
      { isAdded
          ? <ModifyNote 
              isAdded={isAdded}
              event={addNote} 
              selectedNote={selectedNote} 
            />
          : <div></div>
      }
      { isEditted
          ? <ModifyNote 
              isAdded={isAdded}
              event={editNote} 
              selectedNote={selectedNote} 
            />
          : <div></div>
      }
      { isDeleted
          ? <DeletePopup 
              selectedNote={selectedNote}
              fetchNote={fetchNote}
              viewNote={viewNote} 
              alert={alert}
              deleteNote={deleteNote}
            />
          : <div></div>
      }
    </NoteDiv>
  )
}

class NoteList extends Component {
  constructor () {
    super();
  }

  handleOnChange = (e) => {
    this.props.searchNote(e.target.value);

    if (e.target.value === '') {
      this.props.noSearch();
    }
  }

  render() {
    return (
      <NoteListDiv>
        <SearchBar handleOnChange={this.handleOnChange}/>
        <h3>Your Notes: </h3>
        { this.props.isSearched
            ? <div>
                { this.props.filteredNotes.map(note => {
                    return (
                      <IndividualNoteDiv key={note._id} onClick={() => this.props.viewNote(note._id)}>
                        <h3>{note.title}</h3><br/>
                        <p>{note.textBody}</p><br/>
                        <div>{note.tags}</div>
                      </IndividualNoteDiv>
                      )
                })}
              </div>
            : <div>
                { this.props.notes.map(note => {
                    return (
                      <IndividualNoteDiv key={note._id} onClick={() => this.props.viewNote(note._id)}>
                        <h3>{note.title}</h3><br/>
                        <p>{note.textBody}</p><br/>
                        <div>{note.tags}</div>
                      </IndividualNoteDiv>
                      )
                })}
              </div>
        }
      </NoteListDiv>
    )
  }
}

function SearchBar (props) {
  return <TextInput onChange={props.handleOnChange} type="text" name="search" placeholder="Search" />
}

function IndividualNote (props) {
  return (
    <ExpandedIndividualNoteDiv>
      <div>
        <button onClick={props.viewEditNote}>edit</button>
        <button onClick={props.viewDeleteNote}>delete</button>   
      </div>
      <div>
        <h3>{props.selectedNote.title}</h3>
        <p>{props.selectedNote.textBody}</p>
      </div>                      
    </ExpandedIndividualNoteDiv>

  )
}

function DeletePopup (props) {
  return (
    <Popup>
      <InnerPopup>
         { props.alert !== ''
            ? <div>
                <p>{props.alert}</p>
                <Button onClick={props.fetchNote}>Back</Button>
              </div>
            : <div>
                <p>Are you sure you want to delete this note?</p>
                <Button 
                  onClick={() => {
                    props.deleteNote(props.selectedNote._id);
                  }}
                  style={{background: "red"}}
                >
                  Delete
                </Button>
                <Button onClick={() => props.viewNote(props.selectedNote._id)}>No</Button>
              </div>
         } 
      </InnerPopup>
    </Popup>
  );

}

class ModifyNote extends Component{
  constructor () {
    super();
    this.state = {
      title: '',
      content: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.event(this.state.title, this.state.content, this.props.selectedNote._id);
    this.setState({
      title: '',
      content: ''
    }); 
  }

  render () {
    return (
      <ModifyNoteDiv>
        <h3>{this.props.isAdded ? 'New Note: ' : 'Edit Note: '}</h3>
        <form onSubmit={this.handleOnSubmit}>
          <TextInput onChange={this.handleOnChange} type="text" value={this.state.title} name="title" placeholder="Note Title" />
          <ContentInput onChange={this.handleOnChange} type="text" value={this.state.content} name="content" placeholder="Note Content" />
          <Button>{this.props.isAdded ? 'Save' : 'Update'}</Button>
        </form>
      </ModifyNoteDiv>
    )
  }
}

export default Note;