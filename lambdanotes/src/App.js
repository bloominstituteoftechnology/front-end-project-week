import React, { Component } from 'react';
import NoteContainer from './Note-Container';
import './App.css';
import { Link } from 'react-router-dom';
import NewNoteForm from './New-Note-Form'
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        { title: 'test',
      content: 'test'},
        { title: 'test2',
      content: 'test2'},
        { title: 'test3',
      content: 'test3'}
      ],
      title: '',
      content: '',
      visible: true
    }
    this.addNote = this.addNote.bind(this);
    this.handleNewNoteInput = this.handleNewNoteInput.bind(this);
  }

  addNote = (event) => {
    event.preventDefault();
    let newObj = {
      title: this.state.title,
      content: this.state.content
    };
    this.setState({
      notes: [...this.state.notes, newObj]
    })
    console.log(this.state.notes);
    this.setState({
      title: '',
      content: ''
    })
  }

  handleNewNoteInput = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }



  render() {
    return (
      <Router>
        <div className="App">
          <div className='Left-bar'>
            <h1>Lambda Notes</h1>
            <Link to='/'><button>View Notes</button></Link>
            <Link to='NewNoteForm' className='NewNoteButton'><button>Create New Note</button></Link>
          </div>
          <NoteContainer notes={this.state.notes} />
        </div>
      </Router>
    );
  }
}

export default App;
