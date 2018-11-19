import React from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

import styles from '../css/EditNoteForm.css';

class EditNoteForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          note: {},
          newTitle : '',
          newTextBody : '',
        }
    }
        componentDidMount(){
            axios   
                .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
                    .then(response =>{
                        this.setState({
                            note : response.data,
                            newTitle : response.data.title,
                            newTextBody : response.data.textBody,
                        })
                    })
                .catch(err =>{
                    console.log('Trouble fetching data', err)
                })    
        }

    inputHandler = (event) =>{
        event.preventDefault()
        this.setState({[event.target.name] : event.target.value})
    }

    submitHandler = (event) =>{
        event.preventDefault()
        const newNote = Object.assign({}, this.state.note, {
            title : this.state.newTitle,
            textBody : this.state.newTextBody,
            id : this.props.match.params.id,
        })
        axios   
            .put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, newNote )
                .then(response =>{
                    this.setState({
                        note :response.data,
                        newTitle : '',
                        newTextBody : '',
                    })
                })
            .catch(err =>{
                console.log('Trouble adding new note', err)
            })    
    }
    
    

    render(){
        return(
            <div className = 'edit-page-container'>
                <div className = 'sub-container'>
                    <h1 className = 'edit-header'>Edit Note:</h1>
                    <form className = 'form' >
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
                            <button className = 'submit-button' type = 'submit' onClick = {this.submitHandler}>Save</button>
                        </Link>

                    </form>
                </div>
            </div>
        )
    }
}
export default EditNoteForm;