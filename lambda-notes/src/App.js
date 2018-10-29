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
      title: '',
      textBody: ''
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
    this.props.addNote(this.state);
    this.setState({ title: '', textBody: '' });
    this.props.history.push('/');
  };
  handleDelete=(event)=> {  
    event.preventDefault();  
    console.log(event.currentTarget.value)
    this.props.deleteNote(event.currentTarget.value);
  };
  handleEdit=(event)=> {  
    event.preventDefault();  
    console.log(event.currentTarget.value)
    this.props.deleteNote(event.currentTarget.value);
  };
  render() {
    return (
      <div className="App">
        <Navigation className='nav-bar'/>
        <Route exact path='/' render={()=>
          <NotesList {...this.props} delete={this.handleDelete} notes={this.props.notes} />
        } />        
        <Route path='/new-note' render={()=>
          <AddNoteForm 
            {...this.props}
            inputChange={this.handleInputChange} 
            data={this.state}
            clickHandler={this.clickHandler}/>
        } />
        <Route path='/edit-form' render={()=>
          <EditForm 
            data={this.state} 
            inputChange={this.handleInputChange} 
            edit={this.handleEdit} />
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
