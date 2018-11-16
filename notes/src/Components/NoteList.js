import React, { Component } from 'react';
import axios from 'axios';
import Note from './Note';
import './NoteList.css';
import Menu from './Menu';

class NoteList extends Component {
    render() {
        return (
            <div class='list'>
                <Menu />
                <div class='note-list'>
                    <h2>
                        Your Notes:
                </h2>
                    <div class='notes'>
                        {this.props.notes.map(note => {
                            return (
                                <Note
                                    note={note}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default NoteList;