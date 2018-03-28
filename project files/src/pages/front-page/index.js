import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { notes } from '../notes';
// import { Sample } from './sample-card';

import '../pagestyles/page.css'
import '../pagestyles/card.css';

class Front extends Component{

    constructor(){
        super();
        this.state = {
            notes: notes
        };
    }

    componentDidMount() {
        this.setState({ notes: notes })
    }

    render(){
    return(
        <div className="page-container">
        
            <div className="page-title">Your Notes:</div>
            <div className='note-card-container'>
            
            {this.state.notes.map(note => {
            return(
            <Link to={{
                pathname:`/note/${note.id}`, 
                id:`${note.id}`,
                title:`${note.title}`,
                text:`${note.text}`
            }}
                >
            <ul key={note.id} className="note-card">
            <li className='note-title'>{note.title}</li>
            <li className='note-text'>{note.text}</li>
          
            {/* <Sample /> */}
            </ul>
            </Link>
            )}
            )}
        
        </div>    
        </div>
    )
  }
}

export default Front;