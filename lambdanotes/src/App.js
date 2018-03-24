import React, { Component } from 'react';
import * as Scroll from 'react-scroll';

import './App.css';

import LeftPanel from './Components/LeftPanel/LeftPanel';
import RightPanel from './Components/RightPanel/RightPanel';
import NoteComp from './Components/NoteComp/NoteComp';

let scroll = Scroll.animateScroll;

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { title: 'Title Text1', content: 'Content text1' },
        { title: 'Title Text2', content: 'Content text2' },
        { title: 'Title Text3', content: 'Content text3' },
        { title: 'Title Text4', content: 'Content text4' },
        { title: 'Title Text5', content: 'Content text5' }
      ],
      selectedNote: { title: '', content: '' }
    };

    this.getNoteInfo = this.getNoteInfo.bind(this);
  }

  scrollTo = () => {
    scroll.scrollTo(2000);
  };

  handleAddNotes = note => {
    let notes = this.state.notes;
    notes.push(note);
    this.setState({ notes });
  };

  async getNoteInfo(note) {
    await this.setState({ selectedNote: note });
    if (this.state.selectedNote.title !== '') {
      this.scrollTo();
    }
  }

  componentDidMount() {
    scroll.scrollTo(0);
  }

  render() {
    return (
      <div className="App">
        <div className="PanelsSection">
          <div className="LeftPanel">
            <LeftPanel />
          </div>
          <div className="RightPanel">
            <RightPanel
              getNoteInfo={this.getNoteInfo}
              notes={this.state.notes}
            />
          </div>
        </div>
        <div className="AddNoteSection">
          <div className="LeftPanel">
            <LeftPanel getNoteInfo={this.getNoteInfo} />
          </div>
          <div className="AddNoteComp" ref="AddNoteComp">
            <NoteComp
              selectedNote={this.state.selectedNote}
              handleSubmit={this.handleAddNotes}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
