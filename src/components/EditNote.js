import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNote, editNote } from '../actions';
import '../styles/EditNote.css';

const URL = 'https://m4rkl3y-notes.herokuapp.com/api/notes/';

class EditNote extends Component {
    state = {
        title: '',
        body: '',
        // tags: [],
    }


    // parses url path for note id then fetches note from server, prefills form with existing note
    componentDidMount() {
        let id = window.location.pathname.split('/');
        console.log(id);
        id = id[2];
        this.props.fetchNote(URL, id);
     }

    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            this.setState({
                title: this.props.singleNote.title,
                body: this.props.singleNote.content,
                // tags: this.props.singleNote.tags,
            })
        }
    }

    handeInputChange = event => {
            this.setState({ [event.target.name]: event.target.value });
    }

    handleInputSubmit = id => {
        // let tags = [];
        // if (!this.state.tags) {
        //     tags = this.props.singleNote.tags;
        // }
        // else if (this.state.tags === '' || this.state.tags === ' ' || this.state.tags === [] || this.state.tags === [''] || this.state.tags === [' ']) {
        //     tags = [];
        // }
        // else if (this.state.tags.constructor === Array) {
        //     tags = this.state.tags;
        // }
        // else {
        //     tags = this.state.tags.split(',');
        // }
        const note = {
            title: this.state.title,
            content: this.state.body,
            // tags: tags,
        }
        this.props.editNote(URL, id, note);
    }

    render() {
        return(
            <React.Fragment>
                {this.props.fetchingNotes ? (
                    <h1>... fetching note ...</h1>
                ) : (
                    <React.Fragment>
                        {this.props.singleNote.errorMessage ? (
                            <h1 className='id-error'>{this.props.singleNote.errorMessage}</h1>
                        ) : (
                            <React.Fragment>
                        {this.props.singleNote.kind ? (
                            <h1 className='id-error'>The ID you have entered is the incorrect length</h1>
                        ) : (
                        <div className='edit-container'>
                            <h1>Edit Note:</h1>
                            <div className='edit-form'>
                                <input name='title' className='title' value={this.state.title} onChange={this.handeInputChange} />
                                <textarea name='body' className='body' value={this.state.body} onChange={this.handeInputChange}></textarea>
                                {/* <input name='tags' className='tags' placeholder='Tags' value={this.state.tags} onChange={this.handeInputChange} /> */}
                                <button className='update-btn' type='submit' onClick={() => this.handleInputSubmit(this.props.singleNote.id)}>Update</button>
                            </div>
                        </div>
                        )}
                    </React.Fragment>
                        )}
                    </React.Fragment>
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