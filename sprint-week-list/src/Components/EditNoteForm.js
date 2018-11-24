import React from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

import styles from '../css/EditNoteForm.css';

class EditNoteForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          notes : [],
          title : '',
          textBody : '',
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        this.fetchIndividualNote(id);
    }

    fetchIndividualNote = (id) => {
        axios
          .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                
                this.setState(() => ({
                id: response.data._id,
                title: response.data.title,
                textBody: response.data.textBody
                }));
            })
            .catch(err => {
                console.log('Trouble fetching ID',err);
            });
      };

    inputHandler = (event) =>{
        event.preventDefault()
        this.setState({[event.target.name] : event.target.value})
    }

    submitHandler = (event) =>{
       
        event.preventDefault()
         this.props.updateNote({
           id: this.state.id,
           title : this.state.title,
           textBody : this.state.textBody,
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
                        
                            <button className = 'submit-button' type = 'submit' >Save</button>
                       

                    </form>
                </div>
            </div>
        )
    }
}
export default EditNoteForm;