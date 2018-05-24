import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Notes from './components/Notes';
import Note from './components/Note';
import NewNote from './components/NewNote';
import NavNotes from './components/NavNotes';

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
  console.log("SaveNote invoked");
   const notes = [...this.state.notes, note];
   this.setState({notes: notes});     
}
  render() {
    return (
      <div className="App">
        <NavNotes />
        <Route exact path="/" render={() => <Notes state={this.state} />}/>
        <Route path="/new" render={(props) => <NewNote  {...props} save={this.SaveNote} />} />   
       
        <Route path="/note/:id" render={(props) => <Note {...props}state={this.state} />}/>
        {/* <Route path="/note/edit/:id" component={NewNote}/> */}
      </div>
    );
  }
}

export default App;
