import React from 'react';
import axios from 'axios';

import './Style.css'

//const url = process.env.REACT_APP_LOCAL_URL;
const url = process.env.REACT_APP_DEPLOY_URL;
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
            .post(`${url}/api/notes/`, newNote)
            .then(response => {
                    //console.log("RES ******** ",response)
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