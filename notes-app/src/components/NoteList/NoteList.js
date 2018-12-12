import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NoteCard from './NoteCard';

class NoteList extends Component {

    componentDidMount(){
        this.props.searchFilter({ target: { value: ''}})
        console.log(document.querySelector('.searchbar').target)
    }

    render() {
        return (
            <div className = 'note-list-view'> 
                <div className='header'>
                    <h2>Your Notes:</h2>
                    <form><input className='searchbar' onChange={this.props.searchFilter} placeholder="Search" /></form>
                </div>
                <div className='note-list'>
               
                    {
                        this.props.notes.map(note => 
                            <NoteCard
                            note={note}
                            history={this.props.history}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default NoteList;