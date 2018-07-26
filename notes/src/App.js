import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ListView from './components/PageViews/ListView';
import CreateNewView from './components/PageViews/CreateNewView';
import EditView from './components/PageViews/EditView';
import NoteView from './components/PageViews/NoteView';
import DeleteModal from './components/PageViews/DeleteModal';
import notesData from './notes-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      title: '',
      textBody: '',
      delete: false,
    };
  }

  componentDidMount() {
    this.setState({ notes: notesData });
  }

  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  addNewNote = e => {
    e.preventDefault();
    const newNote = { title: this.state.title, textBody: this.state.textBody, _id: this.state.notes.length };
    const notes = this.state.notes.slice();
    notes.push( newNote );
    this.setState({ notes, title: '', textBody: ''});
  };

  changeTitle = e => {
    this.setState({ title: e.target.value });
  };

  changeTextBody = e => {
    this.setState({ textBody: e.target.value})
  }

  // deleteNote = () => {
  //   this.state.notes.map((note, index) => {
  //     if(this.state.match.params.id === note.id.toString()) {
  //       this.
  //     }
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route 
          exact path='/' 
          render={() => (
            <ListView 
              notes={this.state.notes}
            />
          )}
        />
        <Route 
          path='/new' 
          render={() => (
            <CreateNewView 
              title={this.state.title}
              textBody={this.state.textBody}
              addNewNote={this.addNewNote}
              changeTitle={this.changeTitle}
              changeTextBody={this.changeTextBody}
            />
          )}
        />
        <Route
          path='/view/:_id'
          render={props => (
            <NoteView 
              note={
                this.state.notes.filter(
                  note => props.match.params._id === note._id )[0]}
            />
          )}
        />
        <Route path='/edit' component= {EditView} />
        <Route path='/delete' render={props => (<DeleteModal {...props}/> )} />
      </div>
    );
  }
}

export default App;
