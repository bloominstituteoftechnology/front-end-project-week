import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import { Navigation, NotesList, AddNote, Note } from "./components";

class App extends Component {
  constructor() {
    super()
    this.state={
      notes: [{
        id: 0,
        tite: 'Note Title',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
      }, {
        id: 1,
        tite: 'Note Title',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
      }, {
        id: 2,
        tite: 'Note Title',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
      }, {
        id: 3,
        tite: 'Note Title',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
      }, {
        id: 4,
        tite: 'Note Title',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
      }, {
        id: 5,
        tite: 'Note Title',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
      }]
    }
  }

  addNote = (note) => {
    const notes = this.state.notes;
    notes.push(note);
  }

  updateNote = (id, note) => {
    const notes = this.state.notes;
    const index = notes.indexOf(id);
    notes.splice(index, 1, note);
  }

  deleteNote = id => {
    const notes = this.state.notes;
    const index = notes.indexOf(id);
    notes.splice(index, 1);
  }

  render() {
    const notes = this.state.notes;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <Navigation />
      <Route exact path="/" render={props => <NotesList notes={notes}/>}/>
      <Route path="/note/:id" component={Note}/>
      <Route path="/addnote" render={props => <AddNote />}/>
      </div>
    );
  }
}

export default App;
