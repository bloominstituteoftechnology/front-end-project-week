import React, { Component } from 'react';
import NoteList from './Components/NoteList';
import NewNote from './Components/NewNote';
import ViewNote from './Components/ViewNote';
import UpdateNote from './Components/UpdateNote';
import './App.css';
import { BrowserRouter as Router, Route, NavLink,  Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
      this.state = {
        notes: [
            {
                note: 'Note Title',
                details: 'Get app up and working',
                id: 0,
            },
              {
                note: 'Note Title',
                details: 'Get app up and working',
                id: 1,
            },
            {
                note: 'Note Title',
                details: 'Get app up and working',
                id: 2,
        },
           
        ],
        note: '',
        details: '',
        id: '',
    }

    this.viewNote = this.viewNote.bind(this);
    this.noteForm = this.noteForm.bind(this);
    this.notes = this.notes.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.submitNote = this.submitNote.bind(this);
  }

  render() {
    return (
      <Router>
        <div className="mainContainer">
          <div className="navBar">
            <h1> Lambda Notes </h1>
            <ul>
              <li>
                
                <NavLink to='/'>
                  <button type="submit" className="navButton">View Your Notes</button>
                </NavLink>
                
              </li>
              <li>
                <NavLink to='/createNote'>
                  <button type="submit" className="navButton2">+Create New Note</button>
                </NavLink>
              </li>
            </ul>
          </div>
        
          <div className="mainContent">
          <Switch>
            <Route path='/' component={this.notes} exact/>
            <Route path='/createNote' component={this.noteForm} />
            <Route path='/:id' component={this.viewNote} />
            <Route path='/:id/update' component={this.updateNote} />
            <Route component={this.notes} />
        </Switch>
          </div>
        </div>
      </Router>
    );
  }

 componentDidMount () {
   
}

  viewNote = (props) => {
    
    let id = props.match.params.id;
    let noteDelete = this.noteDelete;
    if(id === 'createNote' || id === null) {
      return null;
    }
    let note = this.state.notes[id].note;
    let details = this.state.notes[id].details;
    noteDelete = (e) => {
     e.preventDefault();
     this.setState({
       notes: this.state.notes.splice(id, 1),
       
     })
     console.log(this.state);
    }
    return (
      <ViewNote note={note} details={details} id={id} noteDelete={noteDelete} updateNote={this.updateNote} />
    )
  }
  noteForm = () => {
    return (
      <NewNote handleInput={this.handleInput} submitNote={this.submitNote} noteValue={this.state.note} detailsValue={this.state.details} />
    )
  }
  notes = () => {
    return (
      <NoteList notes={this.state.notes}  navNote={this.navToNote}/>
    )
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value});
}

  updateNote = (props) => {
    console.log(props);
    let newProps = props;
    this.setState({
      props: newProps,
    })
  }
  submitUpdate = (e) => {
    e.preventDefault();
    let updateObj = {
      note: this.state.note,
      details: this.state.details,
    }
  }
  submitNote = (e) => {
      e.preventDefault();
      if(this.state.note.length > 0 && this.state.details.length > 0) {
      let newObj = {
        note: this.state.note, 
        details: this.state.details,
        id: this.state.notes.length,
      };
      this.setState({
        notes: [...this.state.notes, newObj],
      })
      this.setState({
          note: '',
          details: '',
          id: '',
      });
    }
  }
}

export default App;
