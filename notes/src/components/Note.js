import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Note from '../Styles/Note';
import history from '../history';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: []
        }
    }

    componentDidMount() {
        this.setState({
            note: {
                title: this.props.title,
                body: this.props.body
            }
        });
    }

    selectNoteToView() {
        history.push('/view-note');
    }    

    render() {
        return (
            <Note onClick={this.selectNoteToView}>
                <h3>{this.state.note.title}</h3>
                <hr></hr>
                <p>{this.state.note.body}</p>
            </Note>
        );
    }
}

const mapStateToProps = state => ({
    currentNote: state.currentNote
});

export default connect(mapStateToProps)(withRouter(Notes));