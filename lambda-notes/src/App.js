import React, { Component } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom'





class App extends Component {
  state = {
    neededData: [],
    id: 0 
  }

  render() {
    return (
      <div className="Lambda Notes App">
        <Route path="/" component={NavBar} />
        <Route path="/NotesList" render={(props) => <NotesList {...props} needed={this.state.neededData} />}/>
        <Route path="/CreateNote" render={(props) => <CreateNote {...props} />}/>        
      </div>

    );
  }
}
export default App;
