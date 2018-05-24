import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { Navigation, NotesList, AddNote, Note } from "./components";

class App extends Component {
  constructor() {
    super()
    this.state={
      notes: [{
        id: 0,
        title: 'One',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
      }, {
        id: 1,
        title: 'Two',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
      }, {
        id: 2,
        title: 'Three',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
      }, {
        id: 3,
        title: 'Four',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
      }, {
        id: 4,
        title: 'Five',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
      }, {
        id: 5,
        title: 'Six',
        body: 'Bacon ipsum dolor amet ball tip pork belly ribeye cupim shankle picanha. Boudin turducken sirloin bresaola, pig alcatra hamburger pork chop ham hock flank kevin shoulder beef kielbasa tri-tip. Fatback jerky picanha shoulder biltong filet mignon bresaola pastrami chicken tri-tip porchetta boudin. Kevin porchetta meatloaf shank andouille, cow sausage beef ribs bacon. Fatback corned beef tongue rump doner pastrami picanha kevin venison shoulder burgdoggen jerky chuck meatloaf kielbasa.'
      }]
    }
  }

  addNote = (note) => {
    const notes = this.state.notes;
    this.setState({notes: notes.concat(note)});
  }

  updateNote = (note) => {
    let id = parseInt(note.id, 10);
    const notes = this.state.notes;
    const index = notes.findIndex(note => note.id === id);
    notes.splice(index, 1, note);
    this.setState({notes: notes});
  }

  deleteNote = (id) => {
    id = parseInt(id, 10);
    const notes = this.state.notes;
    const index = notes.findIndex(note => note.id === id);
    notes.splice(index, 1);
    this.setState({notes: notes});
  }

  render() {
    const notes = this.state.notes;
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" render={props => <NotesList notes={notes}/>}/>
          <Route path="/addnote" render={props => <AddNote addNote={this.addNote}/>}/>
          <Route path="/:id" render={({match}) => <Note updateNote={this.updateNote} deleteNote={this.deleteNote} notes={notes} match={match}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
