import React, { Component } from 'react';
import './App.css';
import Notes from './components/notes/listNote';
import Nav from './components/nav/nav';
import NewNote  from './components/notes/newNote';
import ReadNote  from './components/notes/readNote';
import EditNote  from './components/notes/editNote';
import DeleteNote  from './components/notes/deleteNote';
import notes from './notesData';

import { Route } from 'react-router-dom';



class App extends Component {
  constructor(){
    super();
    this.state={
      notes: [],
      title: '',
      text: ''
    }
  }
  componentDidMount(){
    this.setState({notes: notes})
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  changeNote = (e, id) => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    notes.forEach(note => {
      if(note.id === id){
        note.title = this.state.title;
        note.text = this.state.text;
      }
    })
    this.setState({notes,  text: '', title: ''});
  }
  addnote = (e) => {
    e.preventDefault();
    const notes = this.state.notes.slice();
    const note = {}
    note.title = this.state.title;
    note.text = this.state.text;
    note.id = notes[notes.length - 1].id + 1;
    notes.push(note)
    this.setState({notes, text: '', title: ''});
  }
  deleteNote = (e, id) => {
    e.preventDefault();
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({notes});
  }
  render() {
    return (
      <div className="app">

        <Route exact path="/new" 
          render={(props) => 
            <NewNote {...props} addnote={this.addnote} 
                    handleInput={this.handleInput} 
                    text={this.state.text}
                    title={this.state.title}
                    />}
        />

        <Route exact path="/note/:id" 
          render={(props) => 
            <ReadNote {...props} notes={this.state.notes} /> }
        />

        <Route exact path="/note/:id/edit" 
          render={(props) => 
              <EditNote {...props} notes={this.state.notes} 
                        handleInput={this.handleInput} 
                        changeNote={this.changeNote}
                        text={this.state.text}
                        title={this.state.title}
              />}
          />

        <Route exact path="/note/:id/delete" 
          render={(props) => 
            <DeleteNote {...props} notes={this.state.notes}
            handleInput={this.handleInput} deleteNote={this.deleteNote} />}
        />

        <Route exact path="/" render={(props) => <Notes {...props} notes={this.state.notes}/> }/>
        <Route path="/" component={Nav}/>
      </div>
      
    );
  }
}

export default App;
