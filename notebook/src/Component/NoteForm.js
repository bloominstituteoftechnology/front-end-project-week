import React, {Component} from 'react';

class NoteForm extends Component {
    constructor() {
        super();
        this.state={
            notes: [],
            header:"",
            content: "",
        }
    }

    handleINputChage = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleNoteSubmit = event => {
        event.preventDefault();
        const newNote = {
            header: this.state.header,
            content: this.state.content,
        };

    }

    render() {
        return(
            <div>
                
            </div>
        )
    }
}

export default NoteForm;