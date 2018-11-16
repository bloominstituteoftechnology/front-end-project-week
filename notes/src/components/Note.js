import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Note from '../Styles/Note';

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
            body: this.props.body,
            id: this.props.id
        });
    } 

    render() {
        return (
            <Link to={`/view-note/${this.state.id}`}>
                <Note onClick={this.selectNoteToView}>
                    <h3>{this.state.title}</h3>
                    <hr></hr>
                    <p>{this.state.body}</p>
                </Note>
            </Link>
        );
    }
}

export default Notes