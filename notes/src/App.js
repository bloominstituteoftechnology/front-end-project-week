import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import { testData } from './testData'
import NoteList from './components/NoteList'
import CreateNote from './components/CreateNote'


class App extends Component {
  state = {
    notes: testData,
  }

  handleCreateNote = note => {
    this.setState(prevState => {
      return {
        notes: prevState.notes.concat(note)
      }
    })
  }
  render() {
    return (
      <div className="App">
       <Sidebar />
       <Route
       exact
					path="/"
					render={() => <NoteList notes={this.state.notes} />}
				/>
       <Route
					path="/notes"
					render={() => <NoteList notes={this.state.notes} />}
				/>
        <Route
        exact
					path="/create"
					render={() => <CreateNote handleSubmit={this.handleCreateNote}/>}
				/>
      </div>
    );
  }
}

export default App;


