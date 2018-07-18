import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote, editNote } from '../actions';

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

    handeInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleInputSubmit = id => {
        const note = {
            title: this.state.title,
            textBody: this.state.body,
        }
        this.props.editNote(URL, id, note);
    }

    render() {
        return(
            <React.Fragment>
                {this.props.fetchingNotes ? (
                    <h1>... fetching note ...</h1>
                ) : (
                <div className='edit-form'>
                    <input name='title' value={this.state.title} onChange={this.handeInputChange} />
                    <textarea name='body' value={this.state.body} onChange={this.handeInputChange}></textarea>
                    <button type='submit' onClick={() => this.handleInputSubmit(this.props.singleNote._id)}>Edit Note</button>
                </div>
                )}
            </React.Fragment>
        )
    }


}

const mapStateToProps = state => {
    return {
        singleNote: state.singleNote,
        fetchingNotes: state.fetchingNotes,
    }
}

export default connect(mapStateToProps, { fetchNote, editNote })(EditNote);