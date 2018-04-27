import React from 'react';
import './inputForm.css';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newNote: '',
            notes: [
                'Note 1',
                'Note 2',
                'Note 3',
                'Note 4'
            ]
        }
        this.noteHandler = this.noteHandler.bind(this);
    }

    // manages the text input
    noteHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // Manages the save button
    handleSubmitNote = event => {
        const { notes } = this.state;
        const myNote = this.state.newNote;
        notes.push(myNote);
        this.setState({ notes });
    }

    // My notes are saving to inputform.props.match.notes
    render() {
        return (
            <div className='InputForm'>
                <div className='InputForm__Header'> Edit Note</div>
                <textarea className='Input' type='text' placeholder='New Note Title'></textarea>
                <textarea
                    className='Input InputBody'
                    type='text'
                    placeholder='New Note Body'
                    name='newNote'
                    value={this.state.newNote}
                    onChange={this.noteHandler}
                ></textarea>
                <div onClick={this.handleSubmitNote} className='save'> Save </div>
            </div>
        )
    }
}


export default InputForm;