import React from 'react';

class EditNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            note: {},
            title: '',
            textBody: '',
        }
    }

    componentDidMount() {
        let noteID = this.props.match.params.id;
        const note = this.state.notes.find(
            note => note.id === Number(noteID)
        );
        if (!note) return;
        this.setState({ note, title: note.title, content: note.content });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const updatedNote = {
            id: this.state.note.id,
            title: this.state.title,
            textBody: this.state.textBody,
        }
        this.props.editNote(updatedNote);
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    render() {
        return (
        <div className="newnote-container">
            <h3 className="newnote-title">Edit Note:</h3>
            <form className="newnote-form">
                <input 
                    onChange={this.handleInputChange}
                    value={this.state.title}
                    name="title"
                    placeholder="Note Title" 
                    type="text"
                    className="note-title-input"
                />
                <input 
                    onChange={this.handleInputChange}
                    value={this.state.textBody}
                    name="textBody"
                    placeholder="Note Content" 
                    type="text"
                    className="note-content-input"
                />
                <button type="submit" onClick={this.handleSubmit}>Update</button>
            </form>
        </div>
        );
    }
}


export default EditNote;