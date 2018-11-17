import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {  ViewNoteStyle, LinkContainer } from '../Styles/ViewNoteStyle';
import { SectionHeading, P } from '../Styles/GeneralStyles';
import ModalOption from './Modal';

class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
    }

    toggle = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    };

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteNote(this.props.match.params.id);
        this.props.history.push('/');
    };

    render() {
        console.log(this.state.modal)
        return (
            <ViewNoteStyle>
                <LinkContainer>
                    <Link to={`/edit-note/${this.props.match.params.id}`}>edit</Link>
                    <a href='' onClick={this.toggle}>delete</a>
                </LinkContainer>
                {this.props.notes.map(note => {
                    if (this.props.match.params.id === note._id) {
                        return (
                            <div key={note._id}>
                                <SectionHeading>{note.title}</SectionHeading>
                                <hr></hr>
                                <P>{note.textBody}</P>
                            </div>
                        );
                    } 
                })} 
                <ModalOption 
                    modal={this.state.modal}
                    handleDelete={this.handleDelete}
                    toggle={this.toggle}
                />
            </ViewNoteStyle>
        );
    }
}

export default ViewNote;