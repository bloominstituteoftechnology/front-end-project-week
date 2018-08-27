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

    }

    render() {
        return(
            <div>
                form
            </div>
        )
    }
}

export default NoteForm;