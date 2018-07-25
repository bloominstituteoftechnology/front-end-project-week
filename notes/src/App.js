import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ListView from './components/PageViews/ListView';
import CreateNewView from './components/PageViews/CreateNewView';
import EditView from './components/PageViews/EditView';
import NoteView from './components/PageViews/NoteView';
import notesData from './notes-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.setState({ notes: notesData });
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route 
          exact path='/' 
          render={() => (
            <ListView 
              notes={this.state.notes}
            />
          )}
        />
        <Route path='/new' component= {CreateNewView} />
        <Route path='/edit' component= {EditView} />
        <Route path='/view' component= {NoteView} />
      </div>
    );
  }
}

export default App;
