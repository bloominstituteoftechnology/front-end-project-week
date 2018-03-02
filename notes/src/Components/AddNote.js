import React, { Component } from 'react';


class AddNote extends Component {

    state = {
        name: '',
        data: ''
    };
    render() {
        return (
            <div className="Notes">

                <form id="input" onSubmit={this.handleSubmit}>
                    <h1>Create New Note:</h1><br />
                    <input className='form-title'
                        type="text" name="note" onChange={this.handleInput} placeholder="Note Title" value={this.state.name} />
                    <input className='form-text'
                        type="text" name="data" onChange={this.handleInput} placeholder="Note Content" value={this.state.data} />
                    <button id='submit' type="submit" onSubmit={this.handleSubmit}>Save  </button>
                </form>
            </div>
        );
    }
    handleInput = (event) => {
        // this.setState({ [event.target.name]: event.target.value });
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        //const nextId = this.getNextId();
        const noteObj = {
            id: this.nextID++,
            name: this.state.name,
            data: this.state.data

        };
        const newNotes = [...this.state.notes, noteObj];
        this.setState({ notes: newNotes, name: '', data: '' });
    };
}

/*     this.setState({
        notes: [...this.state.notes, noteObj],
    });

    this.setState({
        name: '', data: '',
    }); */

export default AddNote;