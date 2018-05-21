import React, { Component } from 'react';
import NoteCards from './NoteCards';

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
        }
      ]
    }
  }


  render() { 
    return (  
      <div className="col-9">
        <h2>Your Notes:</h2>
        <NoteCards notes={this.state.notes}/>
      </div>
    )
  }
}
 
export default AllNotes;