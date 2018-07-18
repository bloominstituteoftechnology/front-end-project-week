import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addNotesAction, fetchingSingleNote} from "../../actions";
import LambdaLeftDiv from '../ViewNotes/LambdaLeftDiv'

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
	//this.props.fetchingSingleNote(this.props.id);
	
};


componentDidUpdate(prevProps,  prevState) {
if (prevProps.saved !== this.props.saved){
        this.props.fetchingSingleNote(this.props.id);
}
}


render() {
        return(
	<div className="view-list-body desktop-view tablet-view">
                <LambdaLeftDiv />


                <div className="note-card-container">{this.props.fetchedSingleNote? (
		<div>	
		<h4 className="note-save-message">New Note Created</h4>
		<h3 className="single-note-title">{this.props.single.title}</h3>
                <div className="single-note-container">{this.props.single.textBody}</div>
		</div>

		):(
		<div>
		<h3 className="new-note-title">Create New Note:</h3>
		<div className="input-container">
		<input onChange={this.changeHandler} className="title-style" type="text" name="title" placeholder="Note Title" value={this.state.title} /><br />
               
	       <textarea onChange={this.changeHandler} className="content-style" type="text" name="content" placeholder="Note Content" value={this.state.content}></textarea><br />

		<button onClick={this.addNote}  className="save-btn">Save</button></div>
		</div>
		)}
                </div>
</div>

        );

}

}

const mapStateToProps = state => {
  return {
          notes: state.notes,
          fetching: state.fetchingNotes,
	  saved: state.noteSaved,
	  id: state.id.success,
	  single: state.singleNote,
	  fetchedSingleNote: state.fetchedSingleNote
  };
};


export default connect(mapStateToProps, {addNotesAction, fetchingSingleNote})(CreateNoteBody);





