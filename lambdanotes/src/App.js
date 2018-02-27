import React from 'react';
import './css/App.css';
import dummyData from './dummy-data';
import NoteContainer from './components/NoteContainer/NoteContainer';
import CreateNoteContainer from './components/CreateNoteContainer/CreateNoteContainer';
import Panel from './components/Panel/Panel';

class App extends React.Component {
  state = {
    notes: [],
    showAddWin: false
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

  handleClickForSave = () => {
    alert('hi')
  }

  render() {
    return (
      <div className="App">
        <Panel showAddWin={this.state.showAddWin} handleClickForCreate={this.handleClickForCreate} />
        <div className="Notes">
          {this.state.showAddWin
            ? <CreateNoteContainer handleClickForSave={this.handleClickForSave} />
            : this.state.notes.map((note, i) => {
              return (
               <NoteContainer key={i} noteTitle={note.noteTitle} noteContent={note.noteContent} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
