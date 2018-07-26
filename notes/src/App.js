import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import noteData from './data';
import Notes from './Components/Notes';
import Addnote from './Components/Addnote';
import Note from './Components/Note';
import SideBar from './Components/SideBar';
import ViewNote from './Components/ViewNote';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    notes: [],
    title: '',
    content: '',
    
   // note: {
   //   title: '',
   //   content: ''
   // }
  };
}

componentDidMount(){
  this.setState({ notes: noteData});
}


addNote = event => {
  event.preventDefault();
  const notes = this.state.notes.slice();
  notes.push({title: this.state.title, content: this.state.content, id: notes.length +1})
  this.setState({notes, title: '', content: ''})
  console.log('added')
  
}

handleInputChange = event => {
  this.setState({[event.target.name]: event.target.value})
}



deleteNote = (id) => {
  
  let notes = this.state.notes.slice();
 let newNotes = notes.filter(note => {
    return note.id !== id
  })
  this.setState({notes: newNotes})
  console.log('deleting is linked');
}


  render() {
       

    return (
      <div className="App">

        <SideBar/>
        <div className='notescontainer'>

          <Route exact path='/' render={props => {
            return(
              <Notes 
        notes={this.state.notes}
        deleteNote={this.deleteNote}
        />
            )
          }}
          />
          <Route exact path ='/addnote' render={props => {
          return(
            
          <Addnote {...props}
          addNote={this.addNote}
        handleInputChange={this.handleInputChange}
        title={this.state.title}
        content={this.state.content}
        /> 
        
  
          )
          
        }}
        
        />

        <Route path ='/notes/' component={ViewNote}/>
      
        </div>

      </div>
    );
  }
}

export default App;
