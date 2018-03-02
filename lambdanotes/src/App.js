import React, { Component } from 'react';
import NoteContainer from './Note-Container';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Note from './Note';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      title: '',
      content: '',
      id: 1,
      visible: true
    }
    this.addNote = this.addNote.bind(this);
    this.handleNewNoteInput = this.handleNewNoteInput.bind(this);
  }

  addNote = (event) => {
    event.preventDefault();
    let newObj = {
      title: this.state.title,
      content: this.state.content,
      id: this.state.id
    };
    let newId = this.state.id;
    console.log(newObj.id);
    this.setState({
      notes: [...this.state.notes, newObj]
    })
    newId++;
    this.setState({
      title: '',
      content: '',
      nextId: newId
    })
  }

  handleNewNoteInput = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }

  NewNoteForm = () => {
    return (
    <div>
        <h5>Create New Note+</h5>
        <form onSubmit={this.addNote}>
          <input onChange={this.handleNewNoteInput} name='title' type='text' placeholder='Title' value={this.state.title}></input>
          <input onChange={this.handleNewNoteInput} name='content' type='text' placeholder='Content' value={this.state.content}></input>
          <button type='submit'>Save</button> 
        </form>  
    </div>
    );
  }

  ViewNote = () => {
    return (
       <Note /> 
    );
  }
 
  render() {
    return (
      <Router>
        <div className="App">
          <div className='Left-bar'>
            <h1>Lambda Notes</h1>
            <Link to='/'><button>View Notes</button></Link>
            <Link to='/NewNoteForm' className='NewNoteButton'><button>Create New Note</button></Link>
          </div>
          <Route path='/' component={() => <NoteContainer notes={this.state.notes} />} exact />
          <Route path='/NewNoteForm' component={this.NewNoteForm} />
          <Route path='/:id' component={this.ViewNote} />
        </div>
      </Router>
    );
  }
}

export default App;
