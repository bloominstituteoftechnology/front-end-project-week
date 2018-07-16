import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputTitle: '',
            inputBody: '',
            addNote: props.addNote,
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    addNote = (e) => {
        e.preventDefault();
        this.state.addNote(this.state.inputTitle, this.state.inputBody);
        this.setState({inputTitle: '', inputBody: ''});
    }

    render(){
        return (
            <div>
                <h3>Create New Note:</h3>
                <form onSubmit={this.addNote}>
                    <input type="text"
                            name="inputTitle"
                            placeholder="Note Title"
                            value={this.state.inputTitle}
                            onChange={this.handleInput} /><br />
                    <input type="text"
                            name="inputBody"
                            placeholder="Note Content"
                            value={this.state.inputBody}
                            onChange={this.handleInput} /><br />
                    <button>Save</button>
                </form>
            </div>
        );
    }
    }

 
export default NoteForm;