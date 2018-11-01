import React, { Component } from "react";
import {  Link } from "react-router-dom";
import '../App.css';
 
class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.notes.find(note => note.id === parseInt(props.match.params.id, 10)).title,
            content: props.notes.find(note => note.id === parseInt(props.match.params.id, 10)).content,
            id: props.notes.find(note => note.id === parseInt(props.match.params.id, 10)).id
        }
    }
    
    handleInputChange = e => {
       this.setState({ [e.target.name]: e.target.value });
   };

    render() {
   let denoted = this.props.notes.find(note => note.id === parseInt(this.props.match.params.id, 10));
   
    console.log(this.state.id);
    if(this.props.notes.length > 0) {
        return (
            <div className="Container add-form-wrap" >
                <h3 className="Header">Edit Note:</h3>
                <form className="add-form">
                   <input 
                    className="title-input" 
                    name="title" 
                    onChange={this.handleInputChange} 
                    value={this.state.title} /> <br/>
                   <textarea 
                    className="text-input" 
                    name="content" 
                    onChange={this.handleInputChange} 
                    value={this.state.content} />
                   <Link to={`/notes/${denoted.id}`} >
                   <div className="save-btn"  
                    onClick={(event) => { 
                       event.preventDefault(); 
                       this.props.editNoteSubmit ( 
                           this.state.id, 
                           this.state.title, 
                           this.state.content); 
                        this.props.history.push(`/notes/${denoted.id}`); }}>Update</div>
                    </Link>
               </form>
           </div>
       )  
   }
}
}

export default EditNote;