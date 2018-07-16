import React, { Component } from 'react';
import axios from 'axios';


class CreateNoteBody extends Component {

constructor(props){
        super(props);
        this.state= {
                title: "",
                content: ""
        };

}


changeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
};


addNote = event => {
	event.preventDefault();
	const note ={title: this.state.title, textBody: this.state.content};

       axios.post("https://killer-notes.herokuapp.com/note/create", note)
      .then(response => {
        console.log("Post Success: ", response);
        this.props.addNoteHandler(response.data);
	
	this.setState({title: "", content: ""});
      })
      .catch(err => {
        console.log(err);
      });
  }



render() {
        return(
                <div className="notes-card-container">
		<h3 className="new-note-title">Create New Note:</h3>
		<div className="input-container">
		<input onChange={this.changeHandler} className="title-style" type="text" name="title" placeholder="Note Title" value={this.state.title} /><br />
               
	       <textarea onChange={this.changeHandler} className="content-style" type="text" name="content" placeholder="Note Content" value={this.state.content}></textarea><br />

		<button onClick={this.addNote}  className="save-btn">Save</button></div>
                </div>


        );

}

}

export default CreateNoteBody;
