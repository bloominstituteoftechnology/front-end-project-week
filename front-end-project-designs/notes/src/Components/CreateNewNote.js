import React from 'react';
import axios from 'axios';

import './Style.css'

class CreateNewNote extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                title : '',
                content : ''
            }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name] : event.target.value});
    }

    createNewNoteObject = (e) => {
        e.preventDefault()
        console.log("CREATE *************  :---  ", this.state)
        const newNote = {
            title : this.state.title,
            content : this.state.content
        }
        // this.setState({title: '', content: ''})
        axios
            .post('http://localhost:7000/api/notes/', newNote)
            .then(response => {
                    console.log("RES ******** ",response)
                    this.props.history.push('/notes')
            })
    }

    render() {     
        return (
            <div className = "create-note-main-div">
                <h3>Create New Note : </h3>
                <form className = "form">
                    <input type = "text"
                           name = "title" 
                           placeholder = "Note Title"
                           value = {this.state.title} 
                           onChange = {this.handleInputChange}
                    />
                    <textarea
                           name = "content" 
                           placeholder = "Note Content"
                           value = {this.state.content} 
                           onChange = {this.handleInputChange}
                    />
                    <button onClick = {this.createNewNoteObject}> Create </button>
                </form>

            </div>
        )
    }
}

export default CreateNewNote;