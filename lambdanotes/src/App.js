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
    let notesRef = fire.database().ref('notes2').orderByKey();
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
    let tempArr = [newNote, ...this.state.notes];
    fire.database().ref('notes2').set(tempArr.reverse());
    this.setState({
      notes: [newNote, ...this.state.notes],
      showAddWin: !this.state.showAddWin
    });
  }

  handleClickForUpdate = (updatedNote, i) => {
    const temp = this.state.notes;
    temp[i] = updatedNote;
    fire.database().ref('notes2').set(temp.reverse());
    this.setState({
      notes: temp.reverse(),
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
      if (tempArr.length <= 1) {
        fire.database().ref("notes2").remove();
      } else {
        fire.database().ref("notes2").remove();
        fire.database().ref("notes2").set(tempArr.reverse());
      }
      this.setState({
        notes: tempArr.reverse(),
        showSingleNote: !this.state.showSingleNote
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Panel notes={this.state.notes} showAddWin={this.state.showAddWin} handleClickForCreate={this.handleClickForCreate} handleClickForView={this.handleClickForView} />
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
