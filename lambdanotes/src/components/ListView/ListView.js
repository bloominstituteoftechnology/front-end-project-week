import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListView.css';
import marked from 'marked';

class ListView extends Component {

    getMarkdownText(text) {
        var rawMarkup = marked(`${text}`, {sanitize: true});
        return { __html: rawMarkup };
    }

    render() {
        return (
            <div className='listViewContainer'>
                <h3 className='listViewHeader'>Your Notes:</h3>
                <div className='noteCardsCollection'>
                    {this.props.notesList.map(note => (
                        <div onClick={() => this.props.setCurrentNote(note._id)} key={note._id} className='entireNoteCardLink'>
                            <Link to={`/${note._id}`} className='noteCardLink'>
                                <div className='noteCard'>
                                    <h6 dangerouslySetInnerHTML={this.getMarkdownText(note.title)} className='noteTitle'></h6>
                                    <span dangerouslySetInnerHTML={this.getMarkdownText(note.textBody)} className='noteContent'></span>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>
        )
    }
}

export default ListView;