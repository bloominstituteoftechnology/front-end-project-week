import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: '',
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.value)
    }
    postHandler = e => {
        const note = {
            title: this.state.title,
            textBody: this.state.textBody
        }
        this.props.postRequest(note)
        this.props.history.push('/notes');
    }
    render() {
        return(
            <div className="noteform-div">
                <h1>Create New Note: </h1>
                <form className="noteform-form" onSubmit={this.postHandler}>
                    <input 
                    placeholder="title"
                    className="noteform-title-input"
                    type="text" 
                    name="title" 
                    onChange={this.handleChange} 
                    value={this.state.title} />
                    <textarea
                    className="noteform-body-input"
                    placeholder="text area"
                    type="text"
                    name="textBody"
                    cols="40" rows="5"
                    onChange={this.handleChange} 
                    value={this.state.textBody} />
                    <button className="noteform-button" type="submit">Add Note</button>
                </form>
            </div>
        )
    }
}

export default NoteForm;