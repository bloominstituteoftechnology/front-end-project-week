import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {  ViewNoteStyle, LinkContainer } from '../Styles/ViewNoteStyle';
import { SectionHeading, P } from '../Styles/GeneralStyles';

class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteNote(this.props.match.params.id);
    };

    render() {
        return (
            <ViewNoteStyle>
                <LinkContainer>
                    <Link to={`/edit-note/${this.props.match.params.id}`}>edit</Link>
                    <a href='' onClick={this.handleDelete}>delete</a>
                </LinkContainer>
                {this.props.notes.map(note => {
                    if (this.props.match.params.id === note._id) {
                        return (
                            <div key={note._id}>
                                <SectionHeading>{note.title}</SectionHeading>
                                <P>{note.textBody}</P>
                            </div>
                        );
                    }
                })} 
            </ViewNoteStyle>
        );
    }
}

export default ViewNote;