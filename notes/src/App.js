import React from 'react';

import "./App.css";
import "./css/note.css"
import NoteList from './components/noteList';
import NoteForm from './components/noteForm';
import Nav from './components/nav';

class App extends React.Component {
  constructor() {
    super();

    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state

    /*****Set the initial state**** */
    this.state = {
      noteList: [],
      inputText: ''
    };
  }

  /********* Add Note Items to Array *****/
  addToList = event => {
    event.preventDefault();
    //grab the current state
    let newArr = this.state.noteList;
    let newNote = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
    };
    newArr.push(newNote);
    //refresh the state
    this.setState({
      noteList: newArr,
      inputText: ''
    });
  };

  /******** Remove Completed Items *********/
  clearComplete = event => {
    event.preventDefault();
    let newNoteList = this.state.noteList.slice();
    newNoteList = newNoteList.filter(item => {
      return item.completed === false;
    });
    //refresh the state
    this.setState({
      noteList: newNoteList
    });
  };

  /******* Toggle Items Upon Completion *********/
  toggleComplete = id => {
    let tempNotes = this.state.noteList.slice();
    tempNotes.map(note => {
      //  note.id === id ? note.completed = !note.completed : "";
      return note;
    });
    //refresh the state
    this.setState({ noteList: tempNotes });
  };

  /******* Update User Input   ********/
  updateUserInput = event => {
    //refresh the state
    this.setState({ inputText: event.target.value });
  };

  /****** Render to Screen (React DOM) *************/
  render() {
    return (

      <div className="App">
        <div className="main-container">
        
          <Nav />
          <div className="main-display">
            <NoteList
              list={this.state.noteList}
              id={this.state.id}
              toggleComplete={this.toggleComplete} />

          </div>
        </div>
      </div>

    );
  }
}

export default App;

  /*  <NoteForm
            addToList={this.addToList}
            userInput={this.state.inputText}
            updateUserInput={this.updateUserInput}
            inputText={this.state.inputText}
            clearComplete={this.clearComplete}
            id={this.state.id}
          /> */