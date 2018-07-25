import React, { Component } from 'react';

import './App.css';
import noteData from './data';
import Notes from './Components/Notes';
import Addnote from './Components/Addnote';
import Note from './Components/Note';

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

        <Notes 
        notes={this.state.notes}
        deleteNote={this.deleteNote}
        />
        <Addnote
        addNote={this.addNote}
        handleInputChange={this.handleInputChange}
        title={this.state.title}
        content={this.state.content}
        />
        
      </div>
    );
  }
}

export default App;
