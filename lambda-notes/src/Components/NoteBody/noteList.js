//IMPORTS
import React, { Component } from 'react';
import NoteCard from './noteCard.js';
import {Link} from 'react-router-dom';

class NoteList extends Component { 
    render() {
        return (
            <div className='col-12'>
                    <div className='col-9 d-flex flex-row mt-5'>
                    <h2 className='justify-self-start font-weight-bold noteHeader'>Your Notes:</h2>
                    </div>
                <div className='row d-flex flex-row justify-content-around'>
                { this.props.cards.map( (card, i) => <div className='col-4'><Link className='link' to='/ViewNote'><NoteCard  key={i} updateSelectedNote={this.props.updateSelectedNote} { ...card } /></Link></div> ) }
                </div>
            </div>
        )
    }
}

export default NoteList;
