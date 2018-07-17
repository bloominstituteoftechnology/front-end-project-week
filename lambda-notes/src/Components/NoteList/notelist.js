import React, { Component } from 'react';
import SideBar from '../Sidebar/sidebar';
import "./notelist.css";
import Note from './note';
class NoteList extends Component {
    constructor() {
        super();
        this.state = {
            notes: [
                {
                    title: 'Note Title',
                    content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
                },
                {
                    title: 'Note Title',
                    content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
                },
                {
                    title: 'Note Title',
                    content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
                },
                {
                    title: 'Note Title',
                    content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
                },
                {
                    title: 'Note Title',
                    content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
                },
                {
                    title: 'Note Title',
                    content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
                },
                {
                    title: 'Note Title',
                    content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
                },
                {
                    title: 'Note Title',
                    content: 'Morbi pellentesque euismod venenatis Nulla ut nibh nunc Phaseilus diam metus. blandit ac purus a effictur mollis'
                },
                
            ]

          }
        }

    render() {
        return (
            <div className="page-container">
                <SideBar />
                <div className="section-container">
                    <h1 className="notes-title"> Your Notes: </h1>
                    <div className="note-container">
                    {this.state.notes.map(note => <Note note={note}/>)}
                      </div>
                  </div>
            </div>
        )
    }
}

export default NoteList;