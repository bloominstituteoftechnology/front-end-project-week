import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';
import NoteCard from './components/NoteCard';
import EditNote from './components/EditNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      visible: false,
      id: null,
    };
  }
  componentDidMount() {
    axios
      .get('https://dewayne-lambda-notes.herokuapp.com/')
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  visible = (id) => {
    this.state.visible ? this.setState({
      visible: false,
      id: null
    }) : this.setState({
      visible: true,
      id: id,
    })
  }
  updateNoteList = () => {
    axios
      .get('https://dewayne-lambda-notes.herokuapp.com/')
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.error('Server Error', error);
      });
}
  addNewNote = note => {
    axios.post('https://dewayne-lambda-notes.herokuapp.com/', note)
      .then((response) => {
        console.log(response);
        this.updateNoteList();
      })
      .catch(error => {
        console.log(error);
      });
  }
  updateNote = (id, note) => {
    axios.put(`https://dewayne-lambda-notes.herokuapp.com/${id}`, note)
      .then((response) => {
        this.updateNoteList();
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteNote = (id) => {
    axios.delete(`https://dewayne-lambda-notes.herokuapp.com/${id}`)
      .then((response) => {
        this.updateNoteList();
        this.visible()
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div >
        <div className="app">
          <div className={this.state.visible ? "fullscreen" : "hidden"}>
            <div className={this.state.visible ? "delete" : "hidden"}><p className="deletepara">Are you sure you want to delete this ? </p>
              <span onClick={() => this.deleteNote(this.state.id)} className="button1">Delete</span>
              <span onClick={() => this.visible()} className="button2">No</span>
            </div>
          </div>
          <div className="sidebar-links">
            <h1>Lambda<br />Notes</h1>
            <NavLink className="link navlink" to={'/'}>View Your Notes</NavLink>
            <NavLink className="link navlink" to={'/note-form'}>+ Create New Note</NavLink>
          </div>
          <div className="content">
            <Route exact path="/" render={(props) => <Notes {...props} notes={this.state.notes} />} />
            <Route path="/note-form" render={(props) => <CreateNote {...props} addnote={this.addNewNote} />} />
            <Route path="/notes/:id" render={(props) => <NoteCard {...props} visible={this.visible} notes={this.state.notes} />} />
            <Route path="/edit/:id" render={(props) => <EditNote {...props} updateNote={this.updateNote} updateNoteList={this.updateNoteList} notes={this.state.notes} />} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
