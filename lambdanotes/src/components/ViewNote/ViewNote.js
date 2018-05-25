import React, { Component } from 'react';
import './ViewNote.css';
import { Link } from 'react-router-dom';
import DeleteNote from '../DeleteNote/DeleteNote.js';
import marked from 'marked';

class ViewNote extends Component {

    getMarkdownText(text) {
        var rawMarkup = marked(`${text}`, {sanitize: true});
        return { __html: rawMarkup };
    }

    render() {
        return (
            <div>
                <div className='optionsContainer'>
                    <div className='entireEditLink'>
                        <Link to={`/${this.props.currentNote._id}/edit`}>
                            <p className='edit'>edit</p>
                        </Link>
                    </div>
                    <DeleteNote updateState={this.props.updateState} currentNoteID={this.props.currentNote._id} />
                </div>
                <div className='entireNote'>
                    <h3 dangerouslySetInnerHTML={this.getMarkdownText(this.props.currentNote.title)} className='viewNoteHeader'>{}</h3>
                    <span dangerouslySetInnerHTML={this.getMarkdownText(this.props.currentNote.textBody)} className='viewNoteContent'></span>
                </div>
            </div>
        )
    }
}

export default ViewNote;