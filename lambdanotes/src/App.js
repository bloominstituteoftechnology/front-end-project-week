import React from 'react';
import './css/App.css';
import dummyData from './dummy-data';
import NoteContainer from './components/NoteContainer/NoteContainer';
import CreateNoteContainer from './components/CreateNoteContainer/CreateNoteContainer';
import Panel from './components/Panel/Panel';

class App extends React.Component {
  state = {
    notes: [],
    showAddWin: false,
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

  handleClickForSave = (newNote) => {
    this.setState({
      notes: [...this.state.notes, newNote],
      showAddWin: !this.state.showAddWin
    });
  }

  singleNoteView = (x) => {
    console.log(x)
  }

  render() {
    return (
      <div className="App">
        <Panel showAddWin={this.state.showAddWin} handleClickForCreate={this.handleClickForCreate} />
          {this.state.showAddWin
            ? <CreateNoteContainer handleClickForSave={this.handleClickForSave} />
            : <NoteContainer notes={this.state.notes} singleNoteView={this.singleNoteView} />

          }
      </div>
    );
  }
}

export default App;
