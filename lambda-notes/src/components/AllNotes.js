import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NoteCards from './NoteCards';
import NoteEdit from './NoteEdit';
import NoteView from './NoteView';
import { fire } from '../fire';

class AllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      notes: [
        // {
        //   id: 0,
        //   title: 'dummy note 1 title',
        //   body: 'Spicy jalapeno bacon ipsum dolor amet ut exercitation jowl, voluptate swine chuck ex. Cupim jowl nostrud strip steak ut. Jerky sirloin pork belly magna. Velit leberkas ball tip filet mignon non corned beef ut tongue fugiat minim spare ribs pork turducken picanha.'
        // },
        // {
        //   id: 1,
        //   title: 'dummy note 2 title',
        //   body: 'Spicy jalapeno bacon ipsum dolor amet ut exercitation jowl, voluptate swine chuck ex. Cupim jowl nostrud strip steak ut. Jerky sirloin pork belly magna. Velit leberkas ball tip filet mignon non corned beef ut tongue fugiat minim spare ribs pork turducken picanha.'
        // },
        // {
        //   id: 2,
        //   title: 'dummy note 3 title',
        //   body: 'Spicy jalapeno bacon ipsum dolor amet ut exercitation jowl, voluptate swine chuck ex. Cupim jowl nostrud strip steak ut. Jerky sirloin pork belly magna. Velit leberkas ball tip filet mignon non corned beef ut tongue fugiat minim spare ribs pork turducken picanha.'
        // },
        // {
        //   id: 3,
        //   title: 'dummy note 4 title',
        //   body: 'Spicy jalapeno bacon ipsum dolor amet ut exercitation jowl, voluptate swine chuck ex. Cupim jowl nostrud strip steak ut. Jerky sirloin pork belly magna. Velit leberkas ball tip filet mignon non corned beef ut tongue fugiat minim spare ribs pork turducken picanha.'
        // },
        // {
        //   id: 4,
        //   title: 'dummy note 5 title',
        //   body: 'Spicy jalapeno bacon ipsum dolor amet ut exercitation jowl, voluptate swine chuck ex. Cupim jowl nostrud strip steak ut. Jerky sirloin pork belly magna. Velit leberkas ball tip filet mignon non corned beef ut tongue fugiat minim spare ribs pork turducken picanha.'
        // },
        // {
        //   id: 5,
        //   title: 'dummy note 6 title',
        //   body: 'Spicy jalapeno bacon ipsum dolor amet ut exercitation jowl, voluptate swine chuck ex. Cupim jowl nostrud strip steak ut. Jerky sirloin pork belly magna. Velit leberkas ball tip filet mignon non corned beef ut tongue fugiat minim spare ribs pork turducken picanha.'
        // }
      ]
    }
    this.notesRef = fire.database().ref('notes')
    
  }
  

  
  
  componentWillMount(){
    this.notesRef.on('value', data => {
      this.snapshotToArray(data.val())
    })
  }

  snapshotToArray = snapshot => {
    if(snapshot !== null){
      const notes = Object.entries(snapshot).map(notes => {
        return Object.assign({}, { id: notes[0] }, notes[1]);
      });  
      this.setState({
        notes: notes,
      });
    }else{
      this.setState({
        notes: [{
          id: "0",
          title: "you have no notes!!",
          body: "This is a note to let you know that you have no notes. if you delete this note, it will rise again in less than 3 days"
        }]
      })
    }
  };

  componentWillUnmount(){
    fire.removeBinding(this.notesRef)
  }
  
  // this is going to be the add for firebase
  addNote = (note) => {
    const newNotes = { title: note.title, body: note.body }
    this.notesRef.push({
      title: note.title,
      body: note.body
    })
    console.log("add",newNotes)
  }

  editNote = note => { 
    console.log("edit",note.id)
    this.notesRef.update({
      [note.id]: {
        title: note.title,
        body: note.body
      }
    })    
  }

  deleteNote = note => {
    this.notesRef.update({
      [note]: null
    })
  }



  // this was the working add for placing in local state
  // addNote = (note) => {
  //   const newNotes = this.state.notes.concat({ id: Date.now(), title: note.title, body: note.body })
  //   this.setState({ notes: newNotes, })
  //   console.log("add",newNotes)
  // }



  //this was the working delete before firebase
  // deleteNote = note => {
  //   const afterDelete = this.state.notes.filter((current) => {
  //     return current.id !== note
  //   })
  //   console.log("after filter",afterDelete)
  //   this.setState({ notes: afterDelete })
    
  // }

  // this was the working edit before firebase
  // editNote = note => { 
  //   console.log("edit",note)
  //   const newNotes = this.state.notes.filter((c) => {
  //     return c.id !== note.id
  //   })
  //   this.setState({notes: newNotes.concat({id: note.id, title: note.title, body: note.body})})
  //   console.log(newNotes)
  // }


  render() { 
    // console.log(this.state.notes)
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