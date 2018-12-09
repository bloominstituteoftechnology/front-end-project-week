import React from 'react';
import { connect } from 'react-redux';
import { addNote, editNote } from '../actions';

class NoteForm extends React.Component {
    constructor(){
        super();
        this.state = {
            tags: [],
            title: '',
            textBody: '',
        }
    }

    handlesChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    addNote = event => {
        event.preventDefault();
        this.props.addNote(this.state);
        this.props.history.push('/');
    }

    editNote = event => {
        event.preventDefault();
        this.props.editNote(this.state, this.props.match.params.id);
        this.props.history.push('/');
    }

    componentDidMount() {
        if(this.props.edit) {
            const currentNote = this.props.notes.find(note => {
                return note.id.toString() === this.props.match.params.id
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
                <form onSubmit={this.addNote}>
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
                    <button>Add Note</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps, { addNote, editNote })(NoteForm);