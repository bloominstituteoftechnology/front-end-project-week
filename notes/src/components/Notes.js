import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Note from './Note';

class Notes extends Component {
  
  render() {
  //   if (this.props.fetching){
  //     return (<div></div>)
  // }
    return (
      <div className="anobato">
      {this.props.notes.map(note => {
                 return (
                     <div className="note" key={note._id}>
                         <Link to={`/notes/${note._id}`}>
                             <Note title={note.title} content={note.textBody} />
                         </Link>
                     </div>
                 )
             })}
         </div>
         )
     }
 }
 
 export default Notes;