import React from 'react';
import './css/App.css';
import dummyData from './dummy-data';
import NoteContainer from './components/NoteContainer/NoteContainer';
import CreateNoteContainer from './components/CreateNoteContainer/CreateNoteContainer';
import SingleNote from './components/SingleNote/SingleNote';
import Panel from './components/Panel/Panel';

class App extends React.Component {
  state = {
    notes: [],
    showAddWin: false,
    showSingleNote:false,
    noteToShow: ''
  };

  componentDidMount() {
    this.setState({
      notes: dummyData,
    });
  }

  handleClickForCreate = () => {
    this.setState({
      showAddWin: !this.state.showAddWin,
    });
  }

  handleClickForView = () => {
    this.setState({
      showAddWin: false,
      showSingleNote: false
    });
  }

  handleClickForSave = (newNote) => {
    this.setState({
      notes: [...this.state.notes, newNote],
      showAddWin: !this.state.showAddWin
    });
  }

  singleNoteView = (singleNote) => {
    console.log(singleNote)
    this.setState({
      showSingleNote: !this.state.showSingleNote,
      noteToShow: singleNote
    })
  }

  render() {
    return (
      <div className="App">
        <Panel showAddWin={this.state.showAddWin} handleClickForCreate={this.handleClickForCreate} handleClickForView={this.handleClickForView} />
        {this.state.showAddWin
            ? <CreateNoteContainer handleClickForSave={this.handleClickForSave} />
            : this.state.showSingleNote
              ? <SingleNote noteToShow={this.state.noteToShow}/>
              : <NoteContainer showSingleNote={this.state.showSingleNote} notes={this.state.notes} singleNoteView={this.singleNoteView} />
        }
      </div>
    );
  }
}

export default App;
