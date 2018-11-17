import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Note from '../Styles/Note';
import { NoteHeading, P } from '../Styles/GeneralStyles';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            id: 0
        }
    }

    componentWillMount() {
        this.setState({
            title: this.props.title,
            body: this.props.body.slice(0,400) + '...',
            id: this.props.id
        });
    } 

    render() {
        return (
            <Link to={`/view-note/${this.state.id}`} style={{ textDecoration: 'none' }} >
                <Note onClick={this.selectNoteToView}>
                    <NoteHeading>{this.state.title}</NoteHeading>
                    <hr></hr>
                    <P>{this.state.body}</P>
                </Note>
            </Link>
        );
    }
}

export default Notes