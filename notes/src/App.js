import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Notes from './components/Notes';
import Note from './components/Note';
import NewNote from './components/NewNote';
import NavNotes from './components/NavNotes';
import EditNote from './components/EditNote.js';

class App extends Component {
  constructor() {
    super();
    this.state={
        notes: [{
          id: 0,
          title: 'Note Title',
          content: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger'
        }, {
          id: 1,
          title: 'Note Title',
          content: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger'
        }, {
          id: 2,
          title: 'Note Title',
          content: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger'
       }, {
         id: 3,
          title: 'Note Title',
          content: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger'
        }, {
          id: 4,
          title: 'Note Title',
          content: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger'
        }, {
          id: 5,
          title: 'Note Title',
          content:'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger'
        }]
      }
    }

SaveNote = (note) => {  
   const notes = [...this.state.notes, note];
   this.setState({notes: notes});     
}

handleEdit = (element) => { 
 this.state.notes.filter((note, index) => {
   if ( note.id === element.id) {
     this.state.notes.splice(index, 1, element);
  }
})
// console.log("My notes", this.state.notes)
  this.setState({notes: this.state.notes});   
 }
  render() {
    return (
      <div className="App">
        <NavNotes />
        <Route exact path="/" render={() => <Notes state={this.state} />}/>
        <Route path="/new" render={(props) => <NewNote  {...props} save={this.SaveNote}/>} />        
        <Route path="/note/:id" render={(props) => <Note {...props}state={this.state} />} />     
        <Route path="/edit/:id" render={(props) => <EditNote {...props}state={this.state} edit={this.handleEdit} />}/>        
      </div>

    );
  }
}
export default App;
