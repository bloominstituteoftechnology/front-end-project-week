import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NotePage from './NotePage';
import DeleteModal from './DeleteModal';
import dummyData from '../dummy-data';

class NoteContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      notes: [],
      id: '',
      show: false,
    }
  }

  componentDidMount(){
    this.setState({notes: dummyData});
  }

  addNote = note => {
    const notes = this.state.notes.slice();
    note.id = this.state.notes[this.state.notes.length - 1].id + 1;
    notes.push(note);
    this.setState({notes});
  }

  getNote = id => {
    return this.state.notes.find(note => note.id === Number(id));
  }

  updateNote = newNote => {
    const newNotes = this.state.notes.map(note => {
      if(note.id === newNote.id){
        return newNote
      } else{
        return note
      }
    });
    this.setState({notes: newNotes});
  }

  showModal = id => {
    this.setState({show: true, id});
  }

  deleteNote = ()=> {
    const newNotes = this.state.notes.filter(note => note.id !== Number(this.state.id));
    this.props.history.push("/");
    this.setState({notes: newNotes, show: false, id: ''});
  }

  cancelDelete = () => {
    this.setState({show: false, id: ''});
  }

  render(){
    return(
      <div className="notes">
        {this.state.show ? <DeleteModal deleteNote={this.deleteNote} cancelDelete={this.cancelDelete} /> : null}
        <Route exact path="/" render={props => <NoteList {...props} notes={this.state.notes} />} />
        <Route exact path="/new" render={props => <NoteForm {...props} addNote={this.addNote} />} />
        <Route exact path="/note/:id" render={props => <NotePage {...props} getNote={this.getNote} toggle={this.showModal} /> } />
        <Route path="/note/:id/edit" render={props => <NoteForm {...props} getNote={this.getNote} updateNote={this.updateNote} editing />} />
      </div>
    );
  }
}

export default withRouter(NoteContainer);
