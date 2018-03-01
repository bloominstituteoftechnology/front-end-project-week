import React from 'react';
import fire from './fire';
import './css/App.css';
//import dummyData from './dummy-data';
import NoteContainer from './components/NoteContainer/NoteContainer';
import CreateNoteContainer from './components/CreateNoteContainer/CreateNoteContainer';
import EditNoteContainer from './components/EditNoteContainer/EditNoteContainer';
import SingleNote from './components/SingleNote/SingleNote';
import Panel from './components/Panel/Panel';

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
    let notesRef = fire.database().ref('notes2').orderByKey().limitToLast(100);
    notesRef.on('child_added', snapshot => {
      let note = snapshot.val();
      this.setState({
      //notes: dummyData,
      notes: [note].concat(this.state.notes),
      });
    })
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
    this.setState({
      notes: [...this.state.notes, newNote],
      showAddWin: !this.state.showAddWin
    });
  }

  handleClickForUpdate = (updatedNote, i) => {
    const tempArr = this.state.notes;
    tempArr[i] = updatedNote;
    this.setState({
      notes: tempArr,
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

  handleDeletePrompt = (i) => {
    if(window.confirm("Are you sure you want to delete this?")) {
      const tempArr = this.state.notes;
      tempArr.splice(i, 1);
      this.setState({
        notes: tempArr,
        showSingleNote: !this.state.showSingleNote
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Panel showAddWin={this.state.showAddWin} handleClickForCreate={this.handleClickForCreate} handleClickForView={this.handleClickForView} />
        {this.state.showAddWin
            ? <CreateNoteContainer handleClickForSave={this.handleClickForSave} />
            : this.state.showSingleNote
              ? <SingleNote indexOfNote={this.state.indexOfNote} noteToShow={this.state.noteToShow} handleDeletePrompt={this.handleDeletePrompt} handleEditPrompt={this.handleEditPrompt} />
              : this.state.showEditWin
                ? <EditNoteContainer indexOfNote={this.state.indexOfNote} noteToShow={this.state.noteToShow} handleClickForUpdate={this.handleClickForUpdate} />
                : <NoteContainer showSingleNote={this.state.showSingleNote} notes={this.state.notes} singleNoteView={this.singleNoteView} />
        }
      </div>
    );
  }
}

export default App;
