import React, { Component } from 'react';
import ListNotes from './ListNotes';
import './Note.css';
import { Link } from 'react-router-dom';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notes: [
                {
                    id: 0,
                    title: 'Test Note',
                    body: 'This Note is a test! Did it work??'
                },
                {
                    id: 1,
                    title: 'Note #2',
                    body: 'I love taking notes!!'
                },
                {
                    id: 2,
                    title: 'Bill of Rights',
                    body: '1) Freedom of Speech 2) The Right to Bear Arms 3) The Housing of Soldiers 4) Protection from Unreasonable Search and Seizure 5) Protection of Rights to Life, Liberty and Property 6) Rights of Accused Persons in Criminal Cases 7) Rights in Civil Cases 8) Excessive Bail, Fines and Punishments Forbidden 9) Other Rights Kept by the People 10) Undelegated Powers Kept by the States and the People'
                }
            ]
         }
    }

  

    render() { 
        console.log('STATE:', this.state)
        console.log('PROPS:', this.props)
        const id = this.props.match.params.id
        const { title, body } = this.state.notes[id];
        return (
            <div className='note-container'> 
                <div className="note-links">
                    <Link to="/create">
                        <a>edit</a>
                    </Link>
                    <Link to='/notes/delete'>
                        <a>delete</a>
                    </Link>
                </div>
                <div className="view-note">
                    <h2> {title} </h2>
                    <p>{body}</p>
                </div>
            </div>    
         )
    }
}
 
export default Note;