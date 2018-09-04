import React, { Component } from 'react';
import DeleteNote from './DeleteNote';
import { Link } from 'react-router-dom';
import './index.css'

export default class NoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayDelete: false,
            selectedNote: [],
            dummyNotes: props.dummyNotes
        }
    }
    showModal = () => {
        this.setState({displayDelete: !this.state.displayDelete})
    }

    componentWillMount() {
        let noteId = this.props.match.params.id;
        let selectedNote = this.state.dummyNotes.filter((note) => note.id === noteId);
        this.setState({selectedNote: selectedNote});
        console.log(this.props)
        console.log('dummyNotes: ', this.state.dummyNotes)
        console.log('selectedNote:', selectedNote)
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