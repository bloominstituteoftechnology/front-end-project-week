import React, { Component } from 'react';
import { connect } from 'react-redux';

const URL = 'https://killer-notes.herokuapp.com/note/';

class EditNote extends Component {
    state = {
        title: '',
        body: '',
    }

    componentDidMount() {
        let id = window.location.pathname.split('/');
        id = id[2];
        this.props.fetchNote(URL, id);
        this.setState({
            title: this.props.singleNote.title,
            body: this.props.singleNote.textBody,
        })
     }


}

const mapStateToProps = state => {
    return {
        singleNote: state.singleNote,
    }
}

export default connect(mapStateToProps)(EditNote);