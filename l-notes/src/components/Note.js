import React from 'react';
import { Redirect } from 'react-router-dom';


Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

class Note extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      note: {},
      delMenu: 'hidden',
      openNote: null,
      updateNote: 'hidden',
      toNotesList: false,
      editTitle: '',
      editTopic: '',
      editText: '',
      editedText: ''
    }
  }

  eHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  deletePrompt = e => {
    this.setState({delMenu: null})
  }

  deleteCancel = e => {
    this.setState({delMenu: 'hidden'})
  }

  startEdit = e => {
    this.setState({openNote: 'hidden', updateNote: null})
  }

  cancelEdit = e => {
    this.setState({openNote: null, updateNote: 'hidden'})
  }

  deleteNote = e => {
    let path = this.props.location.pathname;
    let arr = path.match(/\d+$/);
    let id = arr[0];
    let notes = localStorage.getObj('l-notes-storage-bin')
    let newnotes = [];
    for (var i = 0; i < notes.length; i++) {
      if (notes[i].id != id) {
         newnotes.push(notes[i])
      }
    }
    localStorage.setObj('l-notes-storage-bin', newnotes)
    this.setState({delMenu: 'hidden', toNotesList: true})
    window.location.reload()
  }

  updateNote = e => {
    let path = this.props.location.pathname;
    let arr = path.match(/\d+$/);
    let id = arr[0];
    let notes = localStorage.getObj('l-notes-storage-bin')
    let newnotes = [];
    for (var i = 0; i < notes.length; i++) {
      if (notes[i].id != id) {
         newnotes.push(notes[i])
      }
    }
    newnotes.push({
      id: id,
      title: this.state.editTitle,
      topic: this.state.editTopic,
      text: this.state.editText
    })
    localStorage.setObj('l-notes-storage-bin', newnotes)
    window.location.reload()
  }

  componentDidMount() {
    let path = this.props.location.pathname;
    let arr = path.match(/\d+$/);
    let id = arr[0];
    let notes = localStorage.getObj('l-notes-storage-bin')
    for (var i = 0; i < notes.length; i++) {
      if (notes[i].id == id) {
        this.setState({note: notes[i], editTitle: notes[i].title, editTopic: notes[i].topic, editText: notes[i].text})
      }
    }
  }

  render() {

    const delMenu = `delete-verification ${this.state.delMenu}`
    const openNote = `open-note ${this.state.openNote}`
    const updateNote = `edit-note ${this.state.updateNote}`

    if (this.state.toNotesList === true) {
      return <Redirect to='/'/>
    }

    if (this.state.note === {}) {
      return <Redirect to='/'/>
    }

    return (
      <div>
        <div className={openNote}>
          <div className='options'>
            <span onClick={this.startEdit}>Edit</span>
            <span onClick={this.deletePrompt}>Delete</span>
          </div>
          <h3>{this.state.note.title}</h3>
          <h4>Topic: {this.state.note.topic}</h4>
          <p>{this.state.note.text}</p>
          <div className={delMenu}>
            <div className="delete-box">
              <h4>Are you sure you want to delete this note?</h4>
              <button className='delete-button' onClick={this.deleteNote}>Delete</button>
              <button onClick={this.deleteCancel}>No</button>
            </div>
          </div>
        </div>
        <div className={updateNote}>
          <h3>Edit Note:</h3>
          <form onSubmit={this.updateNote}>
            <input
              className="edit-title"
              onChange={this.eHandler}
              defaultValue={this.state.note.title}
              name="editTitle"
            />
            <input
              className="edit-topic"
              onChange={this.eHandler}
              defaultValue={this.state.note.topic}
              name="editTopic"
            />
            <textarea
              className="edit-text"
              name="editText"
              onChange={this.eHandler}
              value={this.state.editText}
            ></textarea>
            <div className='buttons'>
              <button type="submit">Update Note</button>
              <button className='cancel-button' onClick={this.cancelEdit}>Cancel Edit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Note;
