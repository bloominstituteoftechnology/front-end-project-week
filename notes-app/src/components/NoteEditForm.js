import React, { Component } from 'react';
import axios from 'axios';

class NoteEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            textBody: '',
        }
    }

    componentDidMount() {
        this.getRequest(this.props.match.params.id);
    }
    getRequest = id => {
        axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
        .then(response => {
            this.setState({
                id: response.data._id,
                title: response.data.title,
                textBody: response.data.textBody
            })
        })
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.value)
    }
    putHandler = () => {
        const noteId = this.props.match.params.id;
        const updatedNote = {
            id: this.props.match.params.id,
            title: this.state.title,
            textBody: this.state.textBody
        }
        this.props.putRequest(noteId, updatedNote)
        this.props.history.push('/notes');
    }
    
    render() {
        return(
            <div className="noteform-div">
                <h1>Edit Note: </h1>
                <form className="noteform-form" onSubmit={this.putHandler}>
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

export default NoteEditForm;