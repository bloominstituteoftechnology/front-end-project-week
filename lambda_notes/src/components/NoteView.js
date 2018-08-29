import React, { Component } from 'react';
import DeleteNote from './DeleteNote';
import './index.css'

export default class NoteView extends Component {
    constructor() {
        super();
        this.state = {
            displayDelete: false,
        }
    }
    showModal = () => {
        this.setState({displayDelete: !this.state.displayDelete})
    }

    render() {
        return (
            <div className='createNoteContainer'>
                <div className='noteViewLinks'>
                    <a href='#' className='noteViewEdit noteViewLink'><strong>edit </strong></a>
                    <a href='#' onClick={this.showModal} className='noteViewLink'><strong>delete</strong></a>
                </div>
                <h3>Note Name</h3>
                <p>Content</p>
                <DeleteNote toggle={this.state.displayDelete} updateParent={this.showModal} />
            </div>
        )
    }
}