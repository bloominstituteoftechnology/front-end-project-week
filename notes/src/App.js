import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import { testData } from './testData'
import Notelist from './components/Notelist'


class App extends Component {
  state = {
    notes: testData,
  }
  render() {
    return (
      <div>
       <Sidebar />
       <Notelist notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;


