import React, { Component } from 'react';
import axios from "axios";
import { Route } from "react-router-dom";
import LeftSideBarNav from "./components/LeftSideBarNav";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
import './App.css';
import NoteView from './components/NoteView';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],      
    };
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response.data);
        this.setState({
          notes: response.data
        });
      })
      .catch(err => console.log(err));
  }

  updateNotes = () => {
  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => this.setState({ notes: response.data }))
    .catch(err => console.log(err));
};

handleSubmit = note => {
  axios
    .post('https://fe-notes.herokuapp.com/note/create', note)
    .then(() => this.updateNotes())
    .catch(err => console.log(err));
}

deleteNote = id => {
  axios
    .delete('https://fe-notes.herokuapp.com/note/delete/id')
    .then(() => this.updateNotes())
    .catch(err => console.log(err));
}

  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <LeftSideBarNav />
        <div className='app-content'>
        <Route exact path='/' render={() => <NoteList notes={notes} /> } />
        <Route
          path='/create'
          render={(props) => (
              <AddNote {...props} onSubmit={this.handleSubmit} />  
          )}
          />
          <Route 
            path='view/:id'
            render={props => (
              <NoteView {...props} notes={notes}  />
            )}
            />   
        </div>        
      </div>
    );
  }
}

export default App;


