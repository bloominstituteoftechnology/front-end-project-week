import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addNotesAction} from "../../actions";

class CreateNoteBody extends React.Component {

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
	this.props.addNotesAction(this.state.title, this.state.content); 
	this.setState({title: "", content: ""});	
};



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

const mapStateToProps = state => {
  return {
          notes: state.notes,
          fetching: state.fetchingNotes,
  };
};


export default connect(mapStateToProps, {addNotesAction})(CreateNoteBody);





