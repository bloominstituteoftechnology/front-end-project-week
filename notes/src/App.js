
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
import Form from './components/Form';
import YourNotes from './components/Notes';
import Note from './components/Note';
import EditNote from './components/Edit';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      item: {
        tag: '',
        title: '',
        textBody: '',
      },
    }
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(error => console.log('It\'s over! Turn back now!'))

  }

  addNote = (event, item) => {
    event.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create", item)
      .then(response => {
        item._id = response.data.success;
        this.setState({ notes: [item, ...this.state.notes] })
      })
      .catch(error => console.log('It\'s over! Turn back now!'))
  }
  
  editNote = (event, id) => {
    event.preventDefault();
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, id)
      .then(response => {
        const updatedArray = this.state.notes.map(note => {
          if (note._id === response.data._id) {
            return response.data;
          }
          return note;
        });
        this.setState({ notes: updatedArray });
      })
      .catch(err => console.log('It\'s over! Turn back now!'));
  };


  deleteNote = (event, id) => {
    event.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)

      .then(() => {
        const deletedNote = this.state.notes.filter(note => {
          if (note._id !== id) {
            return note;
          }
        });
        this.setState({ notes: deletedNote });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      
      <div className='container'>
        <div className="App">
          <div className="side-bar">
            <div className='lambda-notes'>
              <h1>Lambda</h1>
              <h1> Notes</h1>
            </div>
            <NavLink exact to='/'>
            <button className='side-button'>View Your Notes</button>
            </NavLink>
            <NavLink to='/create-new-note'>
            <button className='side-button'>+Create New Note</button>
            </NavLink>
          </div>
          
            <Route path exact='/' render={props =><YourNotes {...props}/> }/>

            <Route path='/create-new-note'render={props => <Form {...props} addNote={this.addNote}/> }/>

            <Route path='/notes/:id' render={props => (<Note {...props} notes={this.state.notes}/>)}/>

            <Route path='/edit-note/:id' render={props => <EditNote {...props} notes={this.state.notes}/> }/>

        </div>
      </div>
    );
  }
}
export default App;