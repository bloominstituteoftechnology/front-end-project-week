import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote, editNote } from '../actions';
import '../styles/EditNote.css';

const URL = 'https://killer-notes.herokuapp.com/note/';

class EditNote extends Component {
    state = {
        title: '',
        body: '',
        tags: '',
    }

    // parses url path for note id then fetches note from server, prefills form with existing note
    componentDidMount() {
        let id = window.location.pathname.split('/');
        id = id[2];
        this.props.fetchNote(URL, id);
        if(this.props.singleNote.tags.length > 0) {
            let tags = this.props.singleNote.tags.join(', ');
            this.setState({ tags: tags})
        }
        
        this.setState({
            title: this.props.singleNote.title,
            body: this.props.singleNote.textBody,
        })
     }

    handeInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleInputSubmit = id => {
        let tags = this.state.tags.split(',')
        const note = {
            title: this.state.title,
            textBody: this.state.body,
            tags: tags,
        }
        this.props.editNote(URL, id, note);
    }

    render() {
        return(
            <React.Fragment>
                {this.props.fetchingNotes ? (
                    <h1>... fetching note ...</h1>
                ) : (
                <div className='edit-container'>
                    <h1>Edit Note:</h1>
                    <div className='edit-form'>
                        <input name='title' className='title' value={this.state.title} onChange={this.handeInputChange} />
                        <textarea name='body' className='body' value={this.state.body} onChange={this.handeInputChange}></textarea>
                        <input name='tags' className='tags' value={this.state.tags} onChange={this.handeInputChange} />
                        <button className='update-btn' type='submit' onClick={() => this.handleInputSubmit(this.props.singleNote._id)}>Update</button>
                    </div>
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