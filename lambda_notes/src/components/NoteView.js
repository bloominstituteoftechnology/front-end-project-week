import React, { Component } from 'react';
import DeleteNote from './DeleteNote';
import { Link } from 'react-router-dom';
import './index.css'

export default class NoteView extends Component {
    constructor() {
        super();
        this.state = {
            displayDelete: false,
            selectedNote: [],
            dummyNotes: [
                {
                    id: 'one1',
                    title: 'First Note',
                    body: `When you play the game of thrones, you win or you die. May the Father
                    judge him justly. The Dothraki do things in their own time, for their
                    own reasons. Forgive my manners. I don't see many ladies these days.
                    Lucky for the ladies. And now his watch is ended. The winds of Winter.
                    You know nothing, Jon Snow. It's ten thousand miles between Kings
                    landing and the wall.`,
                      createdAt: 6537826124945,
                },
                {
                  id: 'two2',
                  title: 'Second Note',
                  body: `When you play the game of kings, you win or you die. May the Father
                  judge him justly. The Dothraki do things in their own time, for their
                  own reasons. Forgive my manners. I don't see many ladies these days.
                  Lucky for the ladies. And now his watch is ended. The winds of Winter.
                  You know nothing, Jon Snow. It's ten thousand miles between Kings
                  landing and the wall.`,
                    createdAt: 6521324945,
              },
              {
                  id: 'three3',
                  title: 'Third Note',
                  body: `When you play the game of birds, you win or you die. May the Father
                  judge him justly. The Dothraki do things in their own time, for their
                  own reasons. Forgive my manners. I don't see many ladies these days.
                  Lucky for the ladies. And now his watch is ended. The winds of Winter.
                  You know nothing, Jon Snow. It's ten thousand miles between Kings
                  landing and the wall.`,
                    createdAt: 65371254645,
              }
            ]
        }
    }
    showModal = () => {
        this.setState({displayDelete: !this.state.displayDelete})
    }

    componentWillMount() {
        let noteId = this.props.match.params.id;
        let selectedNote = this.state.dummyNotes.filter((note) => note.id === noteId);
        this.setState({selectedNote: selectedNote});
    }

    render() {
        return (
            <div className='createNoteContainer'>
                <div className='noteViewLinks'>
                    <Link 
                        to={`/edit/${this.props.match.params.id}`} 
                        className='noteViewEdit noteViewLink'
                    >
                        <strong>edit </strong>
                    </Link>
                    <a 
                        href='#' 
                        onClick={this.showModal} 
                        className='noteViewLink'
                    >
                        <strong>delete</strong>
                    </a>
                </div>
                <h3>{this.state.selectedNote[0].title}</h3>
                <p>{this.state.selectedNote[0].body}</p>
                <DeleteNote toggle={this.state.displayDelete} updateStatus={this.showModal} />
            </div>
        )
    }
}