import React, { Component }from 'react';


class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
        }
    }

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    addNote = event => {
        event.preventDefault();
        const newNote = {
            title: this.state.title,
            textBody: this.textBody.textBody
        }
        this.props.addNote(newNote);

        this.setState({
            title: '',
            textBody: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Create New Note</h2>
                <form onSubmit={this.addNote}>
                    <input
                        name='title'
                        placeholder='Note Title'
                        value={this.state.title}
                        onChange={this.handleInputChange}
                    />
                    <input
                        name='textBody'
                        placeholder='Note Content'
                        value={this.state.textBody}
                        onChange={this.handleInputChange}
                    />
                    <button type='submit'>Save</button>
                </form>
        </div>
        )
    }
}

export default NoteForm;