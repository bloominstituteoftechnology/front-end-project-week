import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SideBar from './SideBar';
import NoteView from './NoteView';
import CreateNew from './CreateNew';
import SingleNote from './SingleNote'
// import Notes from './Notes';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      note: {
        tags: [],
        title: '',
        textBody: '',
      },
    };
  }

      //   {title: "Homework",
      //    note: "Hey, I have stuff to do",    
      //    id: 1, 
      // },
      // {title: "Homework2",
      //    note: "Hey, I have more stuff to do",    
      //    id: 2, 
      // },
      // {title: "Homework3",
      //    note: "Hey, I have even more stuff to do",    
      //    id: 3, 
      // },

      // note: ''
   componentDidMount() {
     axios
     .get('https://killer-notes.herokuapp.com/note/get/all')
     .then((response) => {
      this.setState({ notes: response.data})
     })
     .catch(err => {
       console.log(err);
     })
   }

    Submit = event  => {
      event.preventDefault();
      const notes = this.state.notes.slice();
      notes.push({ title: this.notes.title, note: this.notes.note, id: Date.now() });
      this.setState({ notes, note:''});
  }

    // clickID = (note, e) => {
    //   event.preventDefault();
    //   e.target.value, note
    // }


  render() {
    // console.log(this.state.notes);
    return (
      // <Router>
      <div className="App">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="note-view">
        <Switch> 
          <Route path='/viewcards' 
          render={(props) => 
          <NoteView {...props} 
          notes={this.state.notes}
          />}
          />
          {/* //Comeback and check on lines 53 and 57// */}
          <Route path='/createcards'
          render={(props) => 
          <CreateNew {...props} 
          notes={this.state.notes} 
          handleSubmit= {this.handleSubmit}/>} 
          component={CreateNew}
          />
          <Route path="/notes/:id"
          render={(props) => 
          <SingleNote {...props} notes={this.state.notes}/>}
         />
        </Switch>
        </div>
      </div>
      // </Router>
          
       
    );
  }
}

export default App;
