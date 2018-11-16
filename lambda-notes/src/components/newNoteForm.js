import React from 'react';
import axios from 'axios';



class NewNoteForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title: '',
            note: ''
        }
    }

    inputHandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    addNewNote=e=>{
       
        const newNote = {
            title:this.state.title,
            note: this.state.note}
            axios
            .post('https://fe-notes.herokuapp.com/note/create', newNote)
            .then(res => {
                this.setState({title: '', note: ''})
            })
            .catch(err =>{
                console.log(err);
            })
    }

    render(){
        return(
            <div>
             <h1>New Note:</h1>
            <from>
                <input type='text' name='title' value={this.state.title} placeholder='New Note Name' onChange={this.inputHandler} ></input>
                <textarea type='text' name='note' value={this.state.note} placeholder='New Note Content' onChange={this.inputHandler}/>
                <button onSubmit={this.addNewNote}></button>
            </from>
            </div>
        )
    }
}
export default NewNoteForm;