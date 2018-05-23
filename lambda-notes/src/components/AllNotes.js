import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NoteCards from './NoteCards';
import NoteEdit from './NoteEdit';
import NoteView from './NoteView';

class AllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      notes: [
        {
          id: 0,
          title: 'dummy note 1 title',
          body: 'Spicy jalapeno bacon ipsum dolor amet ut exercitation jowl, voluptate swine chuck ex. Cupim jowl nostrud strip steak ut. Jerky sirloin pork belly magna. Velit leberkas ball tip filet mignon non corned beef ut tongue fugiat minim spare ribs pork turducken picanha.'
        },
        {
          id: 1,
          title: 'dummy note 2 title',
          body: 'Spicy jalapeno bacon ipsum dolor amet ut exercitation jowl, voluptate swine chuck ex. Cupim jowl nostrud strip steak ut. Jerky sirloin pork belly magna. Velit leberkas ball tip filet mignon non corned beef ut tongue fugiat minim spare ribs pork turducken picanha.'
        },
        {
          id: 2,
          title: 'dummy note 3 title',
          body: 'Spicy jalapeno bacon ipsum dolor amet ut exercitation jowl, voluptate swine chuck ex. Cupim jowl nostrud strip steak ut. Jerky sirloin pork belly magna. Velit leberkas ball tip filet mignon non corned beef ut tongue fugiat minim spare ribs pork turducken picanha.'
        },
        {
          id: 3,
          title: 'dummy note 4 title',
          body: 'Spicy jalapeno bacon ipsum dolor amet ut exercitation jowl, voluptate swine chuck ex. Cupim jowl nostrud strip steak ut. Jerky sirloin pork belly magna. Velit leberkas ball tip filet mignon non corned beef ut tongue fugiat minim spare ribs pork turducken picanha.'
        },
        {
          id: 4,
          title: 'dummy note 5 title',
          body: 'Spicy jalapeno bacon ipsum dolor amet ut exercitation jowl, voluptate swine chuck ex. Cupim jowl nostrud strip steak ut. Jerky sirloin pork belly magna. Velit leberkas ball tip filet mignon non corned beef ut tongue fugiat minim spare ribs pork turducken picanha.'
        },
        {
          id: 5,
          title: 'dummy note 6 title',
          body: 'Spicy jalapeno bacon ipsum dolor amet ut exercitation jowl, voluptate swine chuck ex. Cupim jowl nostrud strip steak ut. Jerky sirloin pork belly magna. Velit leberkas ball tip filet mignon non corned beef ut tongue fugiat minim spare ribs pork turducken picanha.'
        }
      ]
    }
  }

  addNote = (note) => {
    const newNotes = this.state.notes.concat({ id: Date.now(), title: note.title, body: note.body })
    this.setState({ notes: newNotes, })
    console.log("add",newNotes)
  }

  deleteNote = note => {
    const afterDelete = this.state.notes.filter((current) => {
      return current.id !== note
    })
    console.log("after filter",afterDelete)
    this.setState({ notes: afterDelete })
    
  }

  editNote = note => { 
    console.log("edit",note)
    const newNotes = this.state.notes.filter((c) => {
      return c.id !== note.id
    })
    this.setState({notes: newNotes.concat({id: note.id, title: note.title, body: note.body})})
    console.log(newNotes)
  }


  render() { 
    return (  
      <div className="col-9 mt-5">
        
        <Route exact path="/" render={() => <NoteCards notes={this.state.notes} />} />
        <Route path="/add" render={(props) => <NoteEdit {...props} add={this.addNote}/>} />
        <Route path="/edit/:id" render={(props) => <NoteEdit {...props} notes={this.state.notes} add={this.editNote}/>} />
        <Route path="/note/:id" render={(props) => <NoteView {...props} notes={this.state.notes} delete={this.deleteNote}/>} />
      </div>
    )
  }
}
 
export default AllNotes;