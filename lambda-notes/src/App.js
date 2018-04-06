import React from 'react';
import './css/App.css';
import axios from 'axios';
//import dummyData from './dummy-data';
import NoteContainer from './components/NoteContainer/NoteContainer';
import CreateNoteContainer from './components/CreateNoteContainer/CreateNoteContainer';
import EditNoteContainer from './components/EditNoteContainer/EditNoteContainer';
import SingleNote from './components/SingleNote/SingleNote';
import Panel from './components/Panel/Panel';
import Signup from './components/Signup/Signup';
import { isLoggedIn, getToken } from './utils/AuthService';

class App extends React.Component {
  state = {
    notes: [],
    notes2: [],
    showAddWin: false,
    showSingleNote:false,
    noteToShow: '',
    indexOfNote: '',
    showEditWin: false
  };

  componentDidMount() {
    var tokenToServer = getToken();
    if (tokenToServer) {
      axios.post('/notes', { tokenToServer })
      .then(res => this.setState({ notes: res.data.notes }))
    }
  }

  handleClickForCreate = () => {
    this.setState({
      showAddWin: !this.state.showAddWin,
    });
  }

  handleClickForView = () => {
    this.setState({
      showAddWin: false,
      showSingleNote: false,
      showEditWin: false
    });
  }

  handleClickForSave = (newNote) => {
    var tokenToServer = getToken();
    axios.post('/notes/save', { newNote, tokenToServer })
    .then((result) => {
      // do something with results, maybe.
    });
  /*  this.setState({
      notes: [...this.state.notes, newNote],
      showAddWin: !this.state.showAddWin
    });*/
    window.location.href = "/";
  }

  handleDeletePrompt = (i, noteToDelete) => {
    if(window.confirm("Are you sure you want to delete this?")) {
      axios.post('/notes/shownote/delete', { noteToDelete })
      .then((result) => {
        // do something with results, maybe.
      });
      const tempArr = this.state.notes;
      tempArr.splice(i, 1);
      this.setState({
        notes: tempArr,
        showSingleNote: !this.state.showSingleNote
      })
    }
  }

  handleClickForUpdate = (updatedNote, i) => {
    const temp = this.state.notes;
    temp[i] = updatedNote;
    axios.post('/notes/shownote/edit', { updatedNote })
    .then((result) => {
      // do something with results, maybe.
    });
    this.setState({
      notes: temp,
      showEditWin: !this.state.showEditWin
    });
  }

  singleNoteView = (singleNote, i) => {
    this.setState({
      showSingleNote: !this.state.showSingleNote,
      noteToShow: singleNote,
      indexOfNote: i
    })
  }

  handleEditPrompt = (note) => {
    this.setState({
      showEditWin: !this.state.showEditWin,
      showSingleNote: !this.state.showSingleNote
    });
  }

  render() {
    return (
      ( isLoggedIn() ) ?
      <div className="App">
        <Panel notes={this.state.notes} showAddWin={this.state.showAddWin} handleClickForCreate={this.handleClickForCreate} handleClickForView={this.handleClickForView} />
        {this.state.showAddWin
            ? <CreateNoteContainer handleClickForSave={this.handleClickForSave} />
            : this.state.showSingleNote
              ? <SingleNote indexOfNote={this.state.indexOfNote} noteToShow={this.state.noteToShow} handleDeletePrompt={this.handleDeletePrompt} handleEditPrompt={this.handleEditPrompt} />
              : this.state.showEditWin
                ? <EditNoteContainer indexOfNote={this.state.indexOfNote} noteToShow={this.state.noteToShow} handleClickForUpdate={this.handleClickForUpdate} />
                : <NoteContainer showSingleNote={this.state.showSingleNote} notes={this.state.notes} singleNoteView={this.singleNoteView} sortAfterDrag={this.sortAfterDrag}/>
        }
      </div>
      : <Signup />
    );
  }
}

export default App;
