import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../css/NewNoteForm.css';

class NewNoteForm extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            textBody : '',
        }
    }
    componentDidMount(){
        this.setState({
            title: this.props.notes.title,
            textBody : this.props.notes.textBody,
        })
    }
    inputHandler = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }
    submitHandler = (event) =>{
        event.preventDefault()
        this.props.createNewNote(this.state)
        this.setState({
            title: '',
            textBody : '',
        })
    }
    render(){
        return(
            <div className = 'create-container'>
                <div className = 'sub-container'>
                    <h1 className = 'create-header'>Create New Note:</h1>
                    <form className = 'form' >
                        <input 
                            className = 'title-input'
                            type = 'text'
                            placeholder = 'Note Title'
                            value = {this.state.title}
                            name = 'title'
                            onChange = {this.inputHandler}/>
                        <input 
                            className = 'text-input'
                            type = 'text'
                            placeholder = 'Note Content'
                            value = {this.state.textBody}
                            name = 'textBody'
                            onChange = {this.inputHandler}/>    
                        <Link exact to = '/' onClick = {this.submitHandler}>
                            <button className = 'submit-button' >Save</button>
                        </Link>

                    </form>
                </div>
            </div>
        )
    }
}

export default NewNoteForm;