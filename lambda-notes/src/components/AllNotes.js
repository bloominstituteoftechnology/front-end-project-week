import React, { Component } from 'react';
import NoteCards from './NoteCards';
import NoteEdit from './NoteEdit';

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
    const newNotes = this.state.notes.concat(note)
    this.setState({ notes: newNotes })
  }


  render() { 
    return (  
      <div className="col-9 mt-5">
        
        <NoteCards notes={this.state.notes} />
        <NoteEdit add={this.addNote}/>
      </div>
    )
  }
}
 
export default AllNotes;