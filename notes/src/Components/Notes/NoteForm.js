import React, {Component} from 'react';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: undefined,
            title: '',
            textBody: ''
        }
    }

    componentDidMount() {
        let note;
        if (this.props.type === 'Edit') {
            note = this.props.notes.find( note => {
                if (note.id === this.props.match.params.id) {
                    return (note);
                }
                return (undefined);
            })
        }

        if (note !== undefined) {
            this.setState({
                note: note,
                title: note.title,
                textBody: note.textBody
            })
        }
    }

    submitForm = e => {
        e.preventDefault();
        const note = {
            title: this.state.title,
            textBody:this.state.textBody
        };
        if (this.props.type === 'Create') {
            this.props.createNote(note);
            this.setState({
                title: '',
                textBody: ''
            })
        }
        if (this.props.type === 'Edit') {
            this.props.updateNote(this.props.match.params.id, note);
            this.setState({
                title: '',
                textBody: ''
            })
        }
    }

    updateValue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        if (this.state.note === undefined & this.props.type === 'Edit') {
            return (
                <h1>
                    Sorry, there's no note with that ID!
                </h1>
            )
        }
        return (
            <form onSubmit = {this.submitForm}>
                <p>
                    <h2>
                        {this.props.type === 'Create' ? 'Create Note' : 'Edit Note'}
                    </h2>
                    <input 
                        name='title' 
                        value={this.state.title} 
                        placeholder={this.props.type === 'Create' ? 'Note Title' : ''} 
                        onChange={this.updateValue} 
                    />
                </p>
                <p>
                    <textarea
                        name='textBody' 
                        value={this.state.textBody} 
                        placeholder={this.props.type === 'Create' ? 'Note Content' : ''} 
                        onChange={this.updateValue} 
                    />
                </p>
                <button type='submit'>
                    {this.props.type === 'Create' ? 'Add Note' : 'Update Note'}
                </button>
            </form>
        )
    }
}

export default NoteForm;