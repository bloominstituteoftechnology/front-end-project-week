import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import { testData } from './testData'
import Notelist from './components/Notelist'


class App extends Component {
  state = {
    notes: testData,
  }
  render() {
    return (
      <div className="App">
       <Sidebar />
       <Route
          exact
					path="/notes"
					render={() => <Notelist notes={this.state.notes} />}
				/>
      </div>
    );
  }
}

export default App;


