import React, { Component } from 'react';

import Note from '../Styles/Note';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    componentWillMount() {
        this.setState({
            title: this.props.title,
            body: this.props.body
        });
    } 

    selectNoteToView = () => {
    }

    render() {
        return (
            <Note onClick={this.selectNoteToView}>
                <h3>{this.state.title}</h3>
                <hr></hr>
                <p>{this.state.body}</p>
            </Note>
        );
    }
}

export default Notes