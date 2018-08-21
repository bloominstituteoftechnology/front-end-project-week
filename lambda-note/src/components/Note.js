import React, { Component } from 'react';
import styled from 'styled-components';

const NoteDiv = styled.div`
  display: flex;
  width: 780px;
  justify-content: flex-start;
`
const NoteListDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 10px 40px;

  div {
    display: flex;
    flex-wrap: wrap;
  }
`;

const IndividualNoteDiv = styled.div`
  display: flex;
  align-items: flex-start;
  width: 25%;
  height: 200px;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid lightgray;
  overflow: auto;

  p {
    border-top: 1px solid lightgray;
    text-align: start;
    line-height: 30px;
    font-size: 12px;
  }

  h3 {
    margin: 0;
  }
`;

const ExpandedIndividualNoteDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 40px;

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
    <NoteListDiv>
      <h3>Your Notes: </h3>
      <div>
        {props.notes.map(note => {
          return (
            <IndividualNoteDiv key={note.id} onClick={() => props.viewNote(note.id)}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </IndividualNoteDiv>
            )
        })}
      </div>
    </NoteListDiv>
  )
}

function IndividualNote (props) {
  return (
    <ExpandedIndividualNoteDiv>
      <div>
        <button onClick={props.viewEditNote}>edit</button>
        <button onClick={props.viewDeleteNote}>delete</button>   
      </div>
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
    </ExpandedIndividualNoteDiv>

  )
}

function DeletePopup (props) {
  return (
    <Popup>
      <InnerPopup>
        <p>Are you sure you want to delete this note?</p>
        <Button 
          onClick={() => {
            props.deleteNote(props.selectedNoteId);
            props.viewList();
          }}
          style={{background: "red"}}
        >
          Delete
        </Button>
        <Button onClick={() => props.viewNote(props.selectedNoteId)}>No</Button>
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