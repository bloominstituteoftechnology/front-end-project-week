import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addNote, editNote } from '../actions';

class NoteForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tags: [],
            title: '',
            textBody: '',
        }
    }

    handlesChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitHandler = event => {
        event.preventDefault();
        if (this.props.edit) {
            this.props.editNote(this.state, this.props.match.params.id);
        } else {
            this.props.addNote(this.state);
        }
        this.props.history.push('/');
    }

    componentDidMount() {
        if(this.props.edit) {
            const currentNote = this.props.notesData.find(note => {
                return note._id.toString() === this.props.match.params.id
            });
            if (currentNote) {
                this.setState({
                    tags: currentNote.tags,
                    title: currentNote.title,
                    textBody: currentNote.textBody,
                })
            }
        }
    }

    render() {
        return(
            <div className='notes-input-form'>
                <form onSubmit={this.submitHandler}>
                    <input
                        className='title-input' 
                        type='text'
                        name='title'
                        value={this.state.title}
                        placeholder='Note Title'
                        onChange={this.handlesChanges}
                        required
                    />
                    <input 
                        className='body-input'
                        type='text'
                        name='textBody'
                        value={this.state.textBody}
                        placeholder='Type something here ;)'
                        onChange={this.handlesChanges}
                        required
                    />
                    <button>{this.props.edit? 'Submit Edit' : 'Add Note'}</button>
                </form>
            </div>
        );
    }
}

export default withRouter(
    connect(null, { addNote, editNote })(NoteForm)
);