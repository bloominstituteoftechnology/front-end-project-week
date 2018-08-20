import React, { Component } from 'react';
import NoteCard from './NoteCard'
class Notesview extends Component {
  notesLister = ()=>{
    return(
      <div className='cardBox'>
      {this.props.notes.map((e,i)=>{
        return <NoteCard key={i} title={e.title} body={e.body} id={e.id}/>
      })}
      </div>
    )
  }
  render() {
    return (
      <div className='notesViewContainer'>
        <div className='viewTitle'>Your Notes:</div>
        {this.notesLister()}
      </div>
    );
  }
}

export default Notesview;