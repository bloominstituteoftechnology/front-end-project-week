import React, { Component } from 'react';

import Toolbar from './components/Toolbar';
import NoteContainer from './components/NoteContainer';

class App extends Component {
  render() {
    return (
      <div className="ms-Grid" style={style.expandHeight}>
        <div className="ms-Grid-row" style={style.expandHeight}>
          <div className="ms-Grid-col ms-sm12 ms-lg2 ms-bgColor-neutralLight" style={style.expandHeight}>
            <Toolbar />
          </div>
          <div className="ms-Grid-col ms-sm12 ms-lg10" style={style.expandHeight}>
            <NoteContainer />
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  expandHeight: {
    height: '100%',
  }
}
export default App;