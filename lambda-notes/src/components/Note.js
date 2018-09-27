import React, { Component } from 'react';
import Delete from './Delete';
import { Link } from 'react-router-dom';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        if (this.props.data) {
            return (
                <div className='note-container'>
                    <div className='note-list'>
                        <div className='note'>
                            {this.props.data.title}
                            <hr></hr>
                            {this.props.data.content}   
                        </div>
                    </div>
                </div>
            )
        } else {
            const id = Number(this.props.match.params.id.replace(':', ''));
            const note = this.props.fetchNote(id);
            if (note === undefined) {
                return (
                    <h1>Loading...</h1>
                )
            } else {
                return (
                    <div className='note-view-container'>
                    <div className='note-view-top'>
                        <h3 className='note-title'>
                            {note.title}
                        </h3>
                        <div>
                            <Link to="/edit"><a href='#' className='edit-delete'>edit</a></Link>
                            <a href='#' className='edit-delete' onClick={this.props.deleteNoteHandler}>delete</a>
                        </div>
                    </div>
                    <div className='note-view-body'>
                        <p>
                            {note.content}
                        </p>  
                    </div>
                    <Delete 
                        toggle={this.props.displayDelete} 
                        showModal={this.props.showModal}
                    />
                </div>
                )
            }
        }
    }
}
export default Note;