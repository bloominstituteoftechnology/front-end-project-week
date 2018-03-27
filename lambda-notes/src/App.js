import React, { Component } from 'react';
import Note from './components/Note';
import LeftPanel from './components/LeftPanel'
import SplitPane from 'react-split-pane';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: {
        id: null,
        title: '',
        text: '',
        completed: false
      }
    };
  }

  render() {
    return (
      <div className="App">
        <SplitPane split="vertical" defaultSize={230}>
          
            <LeftPanel />
          
          
            {/* <h2 className="App-title">Your Notes</h2> */}
            <Note />
          
        </SplitPane>
      </div>
    );
  }
}

export default App;
