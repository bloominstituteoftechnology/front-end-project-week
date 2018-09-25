import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SideBar from './SideBar';
import NoteView from './NoteView';
import CreateNew from './CreateNew';
// import Notes from './Notes';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {title: "Homework",
         note: "Hey, I have stuff to do",    
         id: 1, 
      },
      {title: "Homework2",
         note: "Hey, I have more stuff to do",    
         id: 2, 
      },

      ],
      note: ''
    };
  }

    Submit = event  => {
      event.preventDefault();
      const notes = this.state.notes.slice();
      notes.push({ title: this.notes.title, note: this.notes.note, id: Date.now() });
      this.setState({ notes, note:''});

      
  }

  render() {
    console.log(this.state.notes);
    return (
      <Router>
      <div className="App">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="note-view">
        <Switch> 
          <Route path='/viewcards' 
          render={(props) => <NoteView {...props} notes={this.state.notes}/>}
          />
          {/* //Comeback and check on lines 48 and 52// */}
          <Route path='/createcards'
          render={(props) => <CreateNew {...props} notes={this.state.notes} handleSubmit= {this.handleSubmit}/>} 
          component={CreateNew}
          />
        </Switch>
        </div>
      </div>
      </Router>
          
       
    );
  }
}

export default App;
