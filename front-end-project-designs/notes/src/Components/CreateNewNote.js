import React from 'react';
import axios from 'axios';

import './Style.css'

class CreateNewNote extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                title : '',
                textbody : ''
            }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name] : event.target.value});
    }

    createNewNoteObject = () => {
        const newNote = {
              title : this.state.title,
              textBody : this.state.textbody
        }
        //this.setState({title : '', textbody : ''});
        axios
            .post('https://fe-notes.herokuapp.com/note/create', newNote )
            .then(response => this.props.history.replace('/notes'))
            .catch(err => console.log("ERROR : ",err)) 
    }

    render() {     
        // console.log(this.state.title);
        // console.log(this.state.textbody);
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
                           name = "textbody" 
                           placeholder = "Note Content"
                           value = {this.state.textbody} 
                           onChange = {this.handleInputChange}
                    />
                    <button onClick = {this.createNewNoteObject}> Save </button>
                </form>

            </div>
        )
    }
}

export default CreateNewNote;