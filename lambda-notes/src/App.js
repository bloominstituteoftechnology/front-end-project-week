import React, { Component } from 'react';
import './App.css';
import { fetchNotes, addNote, deleteNote } from './actions';
import Navigation from './components/navigation';
import NotesList from './components/notesList';
import { connect } from 'react-redux';
import { Route, withRouter } from'react-router-dom';
import AddNoteForm from './components/addNoteForm';
import EditForm from './components/editForm';
import SingleNote from './components/singleNote';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      textBody: ''
    }
  };
  componentWillMount() {
    this.props.fetchNotes();
  };

  handleInputChange = event => this.setState({ 
    [event.target.name]: event.target.value 
  });
  clickHandler = event => {
    event.preventDefault();
    this.props.addNote(this.state)
    this.setState({ title: '', textBody: '' });
    this.props.history.push('/notes');  
  };
  handleDelete=(event)=> { 
    this.props.deleteNote(event);
    this.props.history.push('/notes'); 
  };

  render() {
    return (
      <div className="App">
        <Navigation className='nav-bar'/>
        <Route exact path='/notes' render={()=>
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
        <Route path="/notes/:id" render={props => (
            <SingleNote {...props} handleDelete={this.handleDelete}/>
          )}
        />
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

export default withRouter(connect(mapStateToProps,{ fetchNotes, addNote, deleteNote })(App));
