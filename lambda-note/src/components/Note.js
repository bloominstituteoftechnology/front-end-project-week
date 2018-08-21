import React, { Component } from 'react';
import styled from 'styled-components';

const NoteDiv = styled.div`
  display: flex;
  width: 780px;
  justify-content: center;
`
const NoteListDiv = styled.div`
  display: flex;
  max-width: 500px;
`

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
`

const InnerPopup = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
`

function Note (props) {
  const { notes, viewNote, viewList, viewDeleteNote, viewEditNote, selectedNoteId, addNote, editNote, deleteNote, isAdded, isView, isDeleted, isEditted } = props;
  const listMode = !isAdded && !isView && !isDeleted && !isEditted;

  return (
    <NoteDiv>
      { listMode
          ? <NoteList notes={notes} viewNote={viewNote} />
          : <div></div>
      }
      {
        isView
          ? <IndividualNote 
              notes={notes} 
              selectedNoteId={selectedNoteId} 
              viewEditNote={viewEditNote} 
              viewDeleteNote={viewDeleteNote} 
            />  
          : <div></div>
      }
      { isAdded
          ? <ModifyNote 
              isAdded={isAdded}
              event={addNote} 
            />
          : <div></div>
      }
      { isEditted
          ? <ModifyNote 
              isAdded={isAdded}
              event={editNote} 
              selectedNoteId={selectedNoteId} 
            />
          : <div></div>
      }
      { isDeleted
          ? <DeletePopup 
              selectedNoteId={selectedNoteId}
              viewList={viewList}
              viewNote={viewNote} 
              deleteNote={deleteNote}
            />
          : <div></div>
      }
    </NoteDiv>
  )
}

function NoteList (props) {
  return (
    <div>
      <h3>Your Notes</h3>
      <NoteListDiv>
      {props.notes.map(note => {
        return (
          <div key={note.id} onClick={() => props.viewNote(note.id)}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
          )
      })}
    </NoteListDiv>
    </div>
  )
}

function IndividualNote (props) {
  return (
    <div>
      <button onClick={props.viewEditNote}>edit</button>
      <button onClick={props.viewDeleteNote}>delete</button>
      { props.notes.filter(note => note.id === props.selectedNoteId)
                   .map(note => {
                     return (
                       <div>
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                       </div>                      
                     )
                   }) 
      }
    </div>

  )
}

function DeletePopup (props) {
  return (
    <Popup>
      <InnerPopup>
        <h3>Are you sure you want to delete this note?</h3>
        <button 
          onClick={() => {
            props.deleteNote(props.selectedNoteId);
            props.viewList();
        }}>
          Delete
        </button>
        <button onClick={() => props.viewNote(props.selectedNoteId)}>No</button>
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
    this.props.event(this.state.title, this.state.content, this.props.selectedNoteId);
    this.setState({
      title: '',
      content: ''
    }); 
  }

  render () {
    return (
      <div>
        <h3>{this.props.isAdded ? 'New Note: ' : 'Edit Note: '}</h3>
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChange} type="text" value={this.state.title} name="title" placeholder="Note Title" />
          <input onChange={this.handleOnChange} type="text" value={this.state.content} name="content" placeholder="Note Content" />
          <button>{this.props.isAdded ? 'Save' : 'Update'}</button>
        </form>
        
      </div>
    )
  }
}

export default Note;