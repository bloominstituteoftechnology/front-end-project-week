import React, { Component } from 'react';
import './App.css';
import { fetchNotes, addNote, deleteNote, singleNote } from './actions'
import Navigation from './components/navigation';
import NotesList from './components/notesList';
import { connect } from 'react-redux';
import { Route } from'react-router-dom';
import AddNoteForm from './components/addNoteForm';
import EditForm from './components/editForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      noteTitle: '',
      noteContent: ''
    }
  };
  componentDidMount() {
    this.props.fetchNotes();
  };
  handleInputChange = event => this.setState({ 
    [event.target.name]: event.target.value 
  });
  clickHandler = event => {
    event.preventDefault();
    console.log('click handler', this.state)
    const { noteTitle, noteContent } = this.state;
    this.props.addNote({ noteTitle, noteContent });
    this.setState({ noteTitle: '', noteContent: '' });
    this.props.history.push('/')
  };
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' render={()=>
          <NotesList {...this.props} notes={this.props.notes} />
        } />
        
        <Route path='/new-note' render={()=>
          <AddNoteForm 
            {...this.props}
            inputChange={this.handleInputChange} 
            data={this.state}
            clickHandler={this.clickHandler}/>
        } />
        <Route path='/edit-form' render={()=>
          <EditForm data={this.state}  />
        } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetching: state.fetching 
  };
};

export default connect(mapStateToProps,{ fetchNotes, addNote, deleteNote, singleNote })(App);
