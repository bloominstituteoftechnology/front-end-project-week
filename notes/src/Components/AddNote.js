import React, { Component } from 'react';


class AddNote extends Component {

    state = {
        name: '',
        data: ''
    };
    render() {
        return (
            <div className="Notes">

                <form id="input"onSubmit={this.handleSubmit}>
                    <input type="text" name="note" onChange={this.handleInput} placeholder="Note Title" value={this.namevalue} />
                    <input type="text" name="data" onChange={this.handleInput} placeholder="Note Content" value={this.datavalue} />
                    <button id= 'submit' type="submit" onSubmit={this.handleSubmit}>Save  </button>
                </form>
            </div>
        );
    }
    handleInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        //const nextId = this.getNextId();
        const noteObj = {
            id: this.nextID++,
            name: this.state.name,
            data: this.state.data,

        }
        this.setState({
            notes: [...this.state.notes, noteObj],
        });

        this.setState({
            name: '', data: '',
        });
    }
}
export default AddNote;