import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { Link } from 'react-router-dom';

import NotesList from './components/NotesList';
import Navigation from './components/Navigation';
import './App.css';
import AddNote from './components/AddNote';
import ViewNote from './components/ViewNote';
import EditeNote from './components/EditeNote';
import Login from './components/Login';
//import Signup from './components/Signup';

axios.defaults.withCredentials = true;


class App extends Component {

  constructor() {
    super();
    this.state = {
      longinFlag: false,
      notes: []
    }
  }

  addNote = (title, text) => {
    axios.post(`https://shrouded-shelf-42770.herokuapp.com/`, {
      title: title,
      text: text,
    })
      .then(response => {
      })
      .catch(error => { console.log('Error: could not save data to db') });

    const newNotes = this.state.notes;
    const newNote = { title: title, text: text }
    newNotes.push(newNote);
    this.setState({
      notes: newNotes,
    })
  }

  deleteNote = (id) => {
    axios.delete(`https://shrouded-shelf-42770.herokuapp.com/${id}`)
      .then(response => {
        this.setState({ notes: response.data });
        //console.log('data: ', response.data);
      })
      .catch(error => {
        console.log("error: could not delete the item");
      })


    /* const newNotes = this.state.notes;
    if (index !== -1) {
      newNotes.splice(index, 1);
    }
    this.setState({
      notes: newNotes,
    }) */
  };

  updateNote = (id, obj) => {
    axios.put(`https://shrouded-shelf-42770.herokuapp.com/${id}`, obj)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.log("error: updating note failed");
      });
  };


  login = () => {
    this.setState({
      longinFlag: true,
    });
  }

  logout = () => {
    this.setState({
      longinFlag: false,
    })
  }

  render() {
    return (
      <div className='container'>
        {this.state.longinFlag ? (
          <React.Fragment>
            <div className='notes-menu'>
              <h2> Lambda Notes </h2>
              <Navigation />
              <div className='nav-bar'>
                <CSVLink data={this.state.notes}
                  filename={"My-notes.csv"}
                  className='link download'>
                  Download Notes
                  </CSVLink>
                <Link to='/' className='link signOut' onClick={this.logout}> Sign Out </Link>
              </div>
            </div>

            <div className='notes-list'>
              <Route path='/NotesList' render={() => <NotesList notes={this.state.notes} />} />
              <Route path='/AddNote' render={() => <AddNote onSubmit={this.addNote} />} />
              <Route path='/ViewNote/:id' render={(props) => <ViewNote {...props} notes={this.state.notes} deleteNote={this.deleteNote} />} />
              <Route path='/EditeNote/:id' render={(props) => <EditeNote {...props} updatenote={this.updateNote} notes={this.state.notes} />} />
            </div>
          </React.Fragment>
        ) : (
            <React.Fragment>
              <Route exact path='/' render={() => <Login changeLoginFlag={this.login} />} />
            </React.Fragment>
          )}
      </div>
    );
  }
  componentDidMount() {
    axios.get(`https://shrouded-shelf-42770.herokuapp.com/`)
      .then(response => {
        this.setState({ notes: response.data })
        //console.log(response.data);
      })
      .catch(error => { console.log('Error: could not fetch data from server') });
  }
}

export default App;
