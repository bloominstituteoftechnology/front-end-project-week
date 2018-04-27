import React from 'react';
import './inputForm.css';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            body: '',
            title: '',
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
        const myNote = this.state.body;
        const id = this.props.notes.length;
         this.state.id = id;
        this.props.notes.push(this.state);
        this.setState({ body: '', id: '' });
    }

    // My notes are saving to inputform.props.match.notes
    render() {
        return (
            <div className='InputForm'>
                <div className='InputForm__Header'> Edit Note</div>
                <textarea 
                className='Input' 
                type='text' 
                placeholder='New Note Title'
                name='title'
                value={this.state.title}
                onChange={this.noteHandler}>
                </textarea>
                <textarea
                    className='Input InputBody'
                    type='text'
                    placeholder='New Note Body'
                    name='body'
                    value={this.state.body}
                    onChange={this.noteHandler}
                ></textarea>
                <div onClick={this.handleSubmitNote} className='save'> Save </div>
            <div> {this.state.notes}</div>
            </div>
        )
    }
}


export default InputForm;