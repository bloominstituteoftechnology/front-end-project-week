import React from 'react';
import NoteList from './mainpage/NoteList';
import NoteView from './mainpage/NoteView';
import EditNote from './mainpage/EditNote';
import CreateNote from './mainpage/CreateNote';
import './mainpage.css';

class MainPage extends React.Component {
  state = {
    switchValue: '',
    switchTitle: '',
    notes: [],

  };

  render() {
    return (
      <div>
        <div>hello</div>
        <div>{this.props.title}</div>
        <div>
          {this.renderSwitch(this.props.caseValue)}
        </div>
      </div>
    );
  }

  renderSwitch = (param) => {
    switch(param) {
      case 'noteList':
        return <div className= "mainPage__noteView">
          <NoteList notesArr={this.state.notes}/>
        </div>;
      case 'noteView':
        return <NoteView />;
      case 'editNote':
        return <EditNote />;
      case 'createNote':
        return <CreateNote addNote={this.addNote}/>;
      default:
        return <div>Welcome to Lambda Notes</div>;
    }
  };

  addNote = (noteObj) => {
    this.setState({ ...this.state, notes: this.state.notes.concat([noteObj]) });
  };

}

export default MainPage;
