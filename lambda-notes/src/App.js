import React, { Component } from 'react';
import './App.css';
import ListView from './components/ListView';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row m-3">
          <div className="col-md-3 vh-100 p-5 border action-container">
            <h2 className="note-card-title display-4">Lambda Notes</h2>
            <button className="view-button btn btn-block">View Your Notes</button>
            <button className="create-button btn btn-block">+ Create New Note</button>
          </div>
          <div className="col-md-9 vh-100 p-5 border">
            <ListView />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
