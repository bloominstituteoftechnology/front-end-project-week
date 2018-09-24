import React, { Component } from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';
import './App.css';
import NoteListView from './views/NoteListView';
import NoteView from './views/NoteView.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <navigator className="navigation-panel">
          <h1>Lambda Notes</h1>
          <button onClick={() => this.props.history.push("/")}  
               ClassName="notelist-button">
            View Your Notes</button>
            <button //onClick={() => this.props.history.push("/create-note")}  
                    ClassName="create-note-button">
            + Create New Notes</button>
        </navigator>
        <div className="display-panel">
          <h2>Your Notes:</h2>
          {/* <NoteListView /> */}
          <Route  exact
                  path='/'
                  Component={NoteListView}/>
          <Route  path='/note'
                  Component={NoteView}/>
          {/* <Route  path='/create-note'
                  Component={CreateNoteView}/> */}
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  noteList: state.notes
});

export default withRouter(App);
