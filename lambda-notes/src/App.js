import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation';
import NotesList from './components/notesList';
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
    
  };
  componentWillUnmount() {
    
  };
  handleInputChange = event => this.setState({ 
    [event.target.name]: event.target.value 
  });
  clickHandler = event => {
    event.preventDefault();
    
    this.setState({ title: '', textBody: '' });
    this.props.history.push('/notes');
    
  };
  handleDelete=(event)=> { 
    
    this.props.history.push('/notes'); 
  };
  sortNotesAZ = () => {
      
  };
  
  render() {
    return (
      <div className="App">
        <Navigation className='nav-bar'/>
        <Route exact path='/notes' render={()=>
          <NotesList {...this.props} sortNotesAZ={this.sortNotesAZ} delete={this.handleDelete} notes={this.props.notes} />
        } />        
        <Route path='/new-note' render={()=>
          <AddNoteForm 
            {...this.props}
            inputChange={this.handleInputChange} 
            data={this.state}
            clickHandler={this.clickHandler}/>
        } />
        <Route path='/edit-form/:id' component={EditForm} /> 
        <Route path="/notes/:id" render={props => (
            <SingleNote {...props} handleDelete={this.handleDelete}/>
          )}
        />
      </div>
    );
  }
}


export default App;
