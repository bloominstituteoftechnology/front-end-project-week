import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SideBar from './SideBar';
import NoteView from './NoteView';
import CreateNew from './CreateNew';
import SingleNote from './SingleNote'
import EditNote from './EditNote';
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
      note:''
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

  handleChange = event => {
    event.preventDefault();
    this.setState({
      note: {
        ...this.state.note,
        [event.target.name]: event.target.value,
      }
      
    });
  };


  handleAddNewNote = event => {
    event.preventDefault();
    console.log('firing');
    axios
    .post('https://killer-notes.herokuapp.com/note/create', this.state.note)
    .then(response => this.setState({note: response.data }));
  };

    clickID = (event) => {
      event.preventDefault();
      return [event.target.id]
    }


  render() {
    console.log(this.state.notes);
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
          <Route path='/createcards'
          render={(props) => 
          <CreateNew {...props}
            handleAddNewNote={this.handleAddNewNote}
            handleChange={this.handleChange}
            notes={this.state.notes}
            note={this.state.note} 
            handleSubmit={this.handleSubmit}/>}
          />
          <Route path="/notes/:id"
          render={(props) => 
          <SingleNote {...props} 
          notes={this.state.notes}/>}
         />
          <Route path='/editcard'
          render={(props) => 
          <EditNote {...props}
          notes={this.state.props}/>}
          />

        </Switch>
        </div>
      </div>
      // </Router>
          
       
    );
  }
}

export default App;
