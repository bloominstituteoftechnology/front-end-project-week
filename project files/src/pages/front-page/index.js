import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { notes } from '../notes';
// import { Sample } from './sample-card';

import '../pagestyles/page.css'
import '../pagestyles/card.css';

class Front extends Component{


    render(){
    return(
        <div className="page-container">
        
            <div className="page-title">Your Notes:</div>
            <div className='note-card-container'>
            
            {this.props.notes.map(note => {
            return(
            <Link className="note-card" to={`/note/${note.id}`} >
            <div key={note.id} className="note-card">
            <div className='note-title'>{note.title}</div>
            <div className='note-text'>{note.text}</div>
          
            {/* <Sample /> */}
            </div>
            </Link>
            )}
            )}
        
        </div>    
        </div>
    )
  }
}

export default Front;