import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import NoteListView from './views/NoteListView';
import NoteView from './views/NoteView';
import CreateNoteView from './views/CreateNoteView';
import EditView from './views/EditView';
import DeleteView from './views/DeleteView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navigation-panel">
            <h1>Lambda Notes</h1>
            <button onClick={() => this.props.history.push("/")}  
                    className="notelist-button">
                    View Your Notes</button>
            <button onClick={() => this.props.history.push("/create-note")}  
                    className="create-note-button">
                    + Create New Notes</button>
        </nav>
        <div className="display-panel">
            <Route  exact
                    path='/'
                    component={NoteListView}/>
            <Route  path="/note/:id"
                    component={NoteView}/>
            <Route  path='/create-note'
                    component={CreateNoteView}/>
            <Route  path='/edit/:id'
                    component={EditView}/>
            {/* <Route  path='/delete/:id'
                    component={DeleteView}/> */}
        </div>
        
      </div>
    );
  }
}


export default withRouter(App);
