import React from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

import styles from '../css/EditNoteForm.css';

class EditNoteForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          notes : [],
          newTitle : '',
          newTextBody : '',
        }
    }

    inputHandler = (event) =>{
        event.preventDefault()
        this.setState({[event.target.name] : event.target.value})
    }

    submitHandler = (event) =>{
        event.preventDefault()
        const updatedNote = {
            title : this.state.newTitle,
            textBody : this.state.newTextBody,
            id : this.props.match.params.id,
        }
        this.props.updateNote(updatedNote)
        this.setState({
            newTitle: '',
            newTextBody : '',
        })
    }
    render(){
        return(
            <div className = 'edit-page-container'>
                <div className = 'sub-container'>
                    <h1 className = 'edit-header'>Edit Note:</h1>
                    <form className = 'form' onSubmit = {this.submitHandler} >
                        <input 
                            className = 'title-input'
                            type = 'text'
                            placeholder = 'Note Title'
                            value = {this.state.newTitle}
                            name = 'newTitle'
                            onChange = {this.inputHandler}/>
                        <input 
                            className = 'text-input'
                            type = 'text'
                            placeholder = 'Note Content'
                            value = {this.state.newTextBody}
                            name = 'newtextBody'
                            onChange = {this.inputHandler}/>    
                        <Link exact to = '/' >
                            <button className = 'submit-button' type = 'submit' >Save</button>
                        </Link>

                    </form>
                </div>
            </div>
        )
    }
}
export default EditNoteForm;