import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SideBar from './SideBar';
import NoteView from './NoteView';
import CreateNew from './CreateNew';
import SingleNote from './SingleNote';
import Notes from './Notes';
import EditNote from './EditNote';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
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

  handleChange = event => {
    event.preventDefault();
    this.setState({
      note: {
        ...this.state.note,
        [event.target.name]: event.target.value,
      }
      
    });
  };

  handleEdit( title, textBody, noteId) {
    console.log(title, textBody, noteId);
  }


  handleAddNewNote = event => {
    event.preventDefault();
    // console.log('firing');
    axios
    .post('https://killer-notes.herokuapp.com/note/create', this.state.note)
    .then(response => this.setState({note: response.data }));
  };

 

  // handleID = event => {
  //   event.preventDefault();
  //   console.log('firing');
  //   axios.
  //   .get('https://killer-notes.herokuapp.com/note/get/id', this.state.note._id)
  //   .then(response => this.)
    
  // }

    clickID = (event) => {
      event.preventDefault();
      return [event.target.id]
    }


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
          <Route exact path='/notes' 
            render={(props) => 
          <NoteView {...props} 
            notes={this.state.notes}
          />}
          />
          <Route path='/notes/new'
            render={(props) => 
          <CreateNew {...props}
            handleAddNewNote={this.handleAddNewNote}
            handleChange={this.handleChange}
            notes={this.state.notes}
            note={this.state.note} 
            handleSubmit={this.handleSubmit}/>}
          />

          <Route path='/notes/:noteId/edit'
            render={routeProps => 
          <EditNote {...routeProps}
            notes={this.state.notes}
            handleEdit = {this.handleEdit}
            />}
          />
          
          <Route path='/notes/:noteId'
            render={(props) => 
          <SingleNote {...props} 
            notes={this.state.notes}/>}
         />
         {/* <Route path='/:noteId'
          render={(props) => 
          <Notes {...props} 
          notes={this.state.notes}/>}
         /> */}

        </Switch>
        </div>
      </div>
      //  </Router> 
          
       
    );
  }
}

export default App;
