import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Route from 'react-router-dom/Route';
import CreateNote from './components/create-note';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div className="listView">
          <div className="titleLambda">Lambda</div>
          <div className="titleNotes">Notes</div>
          <div className="lambdabutton">
            <Button color="info">View your notes</Button>
          </div>
          <div className="lambdabutton">
            <Route path="/create-note" component={CreateNote} />
            <Button to="/create-note" color="info">
              + Create New Note
            </Button>{' '}
          </div>
        </div>

        <div className="notesView">
          <div className="notes">
            <h3>Title</h3>
            <h4>Notes</h4>
          </div>

          <div className="notes">
            <h3>Title</h3>
            <h4>Notes</h4>
          </div>
          <div className="notes">
            <h3>Title</h3>
            <h4>Notes</h4>
          </div>
          <div className="notes">
            <h3>Title</h3>
            <h4>Notes</h4>
          </div>

          <div className="notes">
            <h3>Title</h3>
            <h4>Notes</h4>
          </div>

          <div className="notes">
            <h3>Title</h3>
            <h4>Notes</h4>
          </div>

          <div className="notes">
            <h3>Title</h3>
            <h4>Notes</h4>
          </div>

          <div className="notes">
            <h3>Title</h3>
            <h4>Notes</h4>
          </div>

          <div className="notes">
            <h3>Title</h3>
            <h4>Notes</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
