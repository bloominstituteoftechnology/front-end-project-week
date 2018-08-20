import React, { Component } from 'react';

function Note (props) {
  const { notes, viewNote, addNote, editNote, deleteNote, isAdded, isView, isDeleted, isEditted } = props;
  const listMode = !isAdded && !isView && !isDeleted && !isEditted;

  return (
    <div>
      { listMode
          ? <NoteList notes={notes} viewNote={viewNote} />
          : <div></div>
      }
      {
        isView
          ? <IndividualNote notes={notes} editNote={editNote} deleteNote={deleteNote} />  
          : <div></div>
      }
      { isAdded
          ? <ModifyNote event={addNote} />
          : <div></div>
      }
      { isEditted
          ? <ModifyNote event={editNote} />
          : <div></div>
      }
    </div>
  )
}

function NoteList (props) {
  return (
    <div onClick={props.viewNote}>
      <h3>Your Notes</h3>
      {props.notes.map(note => {
        return (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
          )
      })}
    </div>
  )
}

function IndividualNote (props) {
  return (
    <div>
      <button onClick={() => props.editNote()}>edit</button>
      <button onClick={() => props.deleteNote(1)}>delete</button>
      <h3>{props.notes[0].title}</h3>
      <p>{props.notes[0].content}</p>
    </div>

  )
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
    this.props.event(this.state.title, this.state.content);
    this.setState({
      title: '',
      content: ''
    }); 
  }

  render () {
    return (
      <div>
        <h3>{this.props.name} New Notes</h3>
        <form onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleOnChange} type="text" value={this.state.title} name="title" placeholder="Note Title" />
          <input onChange={this.handleOnChange} type="text" value={this.state.content} name="content" placeholder="Note Content" />
          <button>{this.isAdded ? 'Save' : 'Update'}</button>
        </form>
        
      </div>
    )
  }
}

export default Note;