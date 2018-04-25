import React from 'react';
import './inputForm.css';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newNote: '',
            todos: [
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
        console.log('test')
    }

    // Manages the save button
    handleSubmitNote = event => {
        console.log('test')
     }


    render() {
        return (
            <div className='InputForm'>
                <div className='InputForm__Header'> props.header</div>
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

                <div>{this.state.todos}</div>

            </div>
        )
    }
}


export default InputForm;