import React, { Component } from 'react';
import NoteContainer from './Note-Container';
import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ViewNote from './View-Note'


class App extends Component {
  constructor(props) {
    super(props);
    this.id = 1;
    this.state = {
      notes: [],
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
      content: this.state.content,
      id: this.id
    };
    console.log(newObj.id);
    this.setState({
      notes: [...this.state.notes, newObj]
    })
    let newId = (this.id)++
    console.log(newId);
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

  DeleteModal = () => {
    return (
      <div className='Delete-Modal'>
        <button type='submit'>Confirm?</button>
        <button type='submit'>JK!</button>
      </div>     
    );
  }

  viewNote = (props) => {
    console.log(props);
    let id = props.match.params.id;
    console.log(id);
    let title = props.match.params.title;
    console.log(title);
    let content = props.match.params.content;
    console.log(content);
    return (
      <ViewNote title={title} content={content} id={id} />
    )
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
          <Route path='/:id/:title/:content' component={this.viewNote} />
          <Route path='/:id/:title/:content/DeleteModal' component={this.DeleteModal} />
        </div>
      </Router>
    );
  }
}

export default App;
