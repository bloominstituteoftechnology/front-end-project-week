import React, { Component } from 'react';
import { connect } from 'react-redux';

import Note from '../Styles/Note';
//import { viewNote } from '../actions';
import history from '../history';

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
        //history.push('/view-note');
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

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Notes);