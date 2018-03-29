import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import NoteList from './components/noteList';
import ButtonNav from './components/buttonNav/ButtonNav';
import AddNote from './components/addNote/AddNote';
import ViewNote from './components/viewNote/ViewNote';

class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: [
        {
            title: 'Note title',
            content: 'Ullam minima, commodi, rerum aspernatur dicta laudantium Lorem Ullam minima, commodi, rerum ipsum dolor, sit amet!',
        },

        {
            title: 'Note title',
            content: 'Ullam minima, commodi, rerum aspernatur dicta laudantium Lorem Ullam minima, commodi, rerum ipsum dolor, sit amet!',
        },

        {
            title: 'Note title',
            content: 'Ullam minima, commodi, rerum aspernatur dicta laudantium Lorem Ullam minima, commodi, rerum ipsum dolor, sit amet!',
        },

        {
            title: 'Note title',
            content: 'Ullam minima, commodi, rerum aspernatur dicta laudantium Lorem Ullam minima, commodi, rerum ipsum dolor, sit amet!',
        },
        {
            title: 'Note title',
            content: 'Ullam minima, commodi, rerum aspernatur dicta laudantium Lorem Ullam minima, commodi, rerum ipsum dolor, sit amet!',
        },
        {
            title: 'Note title',
            content: 'Ullam minima, commodi, rerum aspernatur dicta laudantium Lorem Ullam minima, commodi, rerum ipsum dolor, sit amet!',
        },
        {
            title: 'Note title',
            content: 'Ullam minima, commodi, rerum aspernatur dicta laudantium Lorem Ullam minima, commodi, rerum ipsum dolor, sit amet!',
        },
        {
            title: 'Note title',
            content: 'Ullam minima, commodi, rerum aspernatur dicta laudantium Lorem Ullam minima, commodi, rerum ipsum dolor, sit amet!',
        },
        {
            title: 'Note title',
            content: 'Ullam minima, commodi, rerum aspernatur dicta laudantium Lorem Ullam minima, commodi, rerum ipsum dolor, sit amet!',
        },
      ]
    }
}

addNote = (title, content) => {
  const newNotes = this.state.notes;
  console.log(newNotes, 'our notes from state')
  const newNote = {title: title, content: content}
  newNotes.push(newNote);
  this.setState({
    notes: newNotes,
  })
}



  render() {
    return (
      <div className='container'>
        <div className="row">
          <h2 className="col-12 font-weight-bold">List View</h2>
        </div>
        <div className='row border'>
        <div className = 'col-2 border'>
              <h2> Lambda Notes </h2>
              <ButtonNav />
            </div>

            <div className = 'notes-list'>
              <Route exact path = '/' render = {() => <NoteList notes = {this.state.notes} /> } />
              <Route  path = '/AddNote' render = {() => <AddNote onSubmit = {this.addNote} /> } />
              <Route  path = '/ViewNote/:id' render = {() => <ViewNote notes = {this.state.notes} /> } />
            </div>
        </div>
            
      </div>
    );
  }
}

export default App;