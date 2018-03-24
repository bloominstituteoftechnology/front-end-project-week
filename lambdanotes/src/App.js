import React, { Component } from 'react';
import './App.css';

import LeftPanel from './Components/LeftPanel/LeftPanel';
import RightPanel from './Components/RightPanel/RightPanel';
import AddNoteComp from './Components/AddNoteComp/AddNoteComp';

class App extends Component {
  state = {
    cards: [
      { title: 'Title Text1', content: 'Content text1' },
      { title: 'Title Text2', content: 'Content text2' },
      { title: 'Title Text3', content: 'Content text3' },
      { title: 'Title Text4', content: 'Content text4' },
      { title: 'Title Text5', content: 'Content text5' }
    ]
  };
  render() {
    return (
      <div className="App">
        <div className="Panels">
          <div className="LeftPanel">
            <LeftPanel />
          </div>
          <div className="RightPanel">
            <RightPanel cards={this.state.cards} />
          </div>
        </div>
        <div className="AddNote">
          <AddNoteComp />
        </div>
      </div>
    );
  }
}

export default App;
