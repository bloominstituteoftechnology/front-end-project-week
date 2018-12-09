import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';

class NoteForm extends React.Component {
    constructor(){
        super();
        this.state = {
            tags: [],
            title: '',
            textBody: '',
            id: Date.now(),
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

export default connect(null, { addNote })(NoteForm);