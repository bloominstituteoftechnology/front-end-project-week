import React from 'react';
import axios from 'axios';

class CreateNote extends React.Component {
    constructor(){
        super();
        this.state={
            title:'',
            text:''
        }
    }

changeHandler=(key, value) => {
    this.setState({
        ...this.state,
        [key]: value
    })
}

// createNote = event=>{
//     event.preventDefault();
//     let note=this.state;
//     if (note.title!=='' && note.text!==''){
//        axios.post("https://fe-notes.herokuapp.com/note/create", this.state)
//        .then(response=>{this.setState({notes:response.data})}) 
//     }
// }

    render(){
        return (
            <div className="create-note-wrapper">
<h2>Create New Note</h2>
<form>
    <input></input>
    <input></input>
</form>
            </div>
        )
    }
}

export default CreateNote;