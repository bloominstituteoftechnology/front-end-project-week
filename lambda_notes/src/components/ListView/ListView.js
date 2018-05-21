import React, { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard';
import '../ListView/ListView.css';

class ListView extends Component {
  constructor(){
    super();
    this.state = {
      notes: [{
        title: 'Note Title',
        content: 'blah blah blah blah blah blah blah',
        id: 0,
      },{
        title: 'Note Title',
        content: 'blah blah blah blah blah blah blah',
        id: 1,
      },{
        title: 'Note Title',
        content: 'blah blah blah blah blah blah blah',
        id: 2,
      },{
        title: 'Note Title',
        content: 'blah blah blah blah blah blah blah',
        id: 3,
      }],
    }
  }
  
  render(){
    return (
      <div className="ListView">
        <h4 className="List-Header">Your Notes:</h4>
        <NoteCard notes={this.state.notes}/>
      </div>
    )
  }
}

export default ListView;