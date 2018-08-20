import React, { Component } from 'react';
import NoteCard from './NoteCard'
import { Link } from "react-router-dom";
class Notesview extends Component {
  notesLister = ()=>{
    return(
      <div className='cardBox'>
      {this.props.notes.map((e,i)=>{
        return <Link key={i} to={`/${e.id}`}><NoteCard  title={e.title} body={e.body} id={e.id}/></Link>
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