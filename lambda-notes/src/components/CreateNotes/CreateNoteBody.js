import React, { Component } from 'react';
import { connect } from 'react-redux';
import {resetCreateNotes, addNotesAction, fetchingSingleNote, fetchingCreatePage} from "../../actions";
import LambdaLeftDiv from '../ViewNotes/LambdaLeftDiv'

class CreateNoteBody extends React.Component {

constructor(props){
        super(props);
        this.state= {
                title: "",
                content: "",
		selectedFile: null
        };

}



componentDidMount(){
	this.props.fetchingCreatePage();
}


changeHandler = event => {
        this.setState({[event.target.name]: event.target.value});
};


fileChangedHandler = (event) => {
	
  this.setState({selectedFile: event.target.files[0]})
}


addNote = event => {
	event.preventDefault();

	this.props.addNotesAction(this.state.title, this.state.content, this.state.selectedFile,()=>{
		this.setState({title: "", content: "", selectedFile:null});
	});
	//this.props.fetchingSingleNote(this.props.id);
};


createNotesReset =event =>{
	  this.props.resetCreateNotes();

};


componentDidUpdate(prevProps, prevState) {
if (prevProps.saved !== this.props.saved){
        console.log(this.props.id);
	this.props.fetchingSingleNote(this.props.id);
	//this.setState({createNote: true});
}
}


render() {
        return(
	<div className="view-list-body desktop-view tablet-view">
                <LambdaLeftDiv createNotesReset={this.createNotesReset}/>


                <div className="note-card-container">{this.props.fetchedSingleNote? (
		<div>	
		<h4 className="note-save-message">New Note Created</h4>
		

		<h3 className="single-note-title">{this.props.single.title}</h3>
                <div className="single-note-container">{this.props.single.content}</div>
		<img src={this.props.single.image} alt="" />			
		</div>

		):(
		<div>
		<h3 className="new-note-title">Create New Note:</h3>

		<form onSubmit={(e)=>{this.addNote(e)}} >
		<div className="input-container">	
		<input onChange={this.changeHandler} className="title-style" type="text" name="title" placeholder="Note Title" value={this.state.title} required /><br />
               
	       <textarea onChange={this.changeHandler} className="content-style" type="text" name="content" placeholder="Note Content" value={this.state.content} required></textarea><br />

		<input type="file" className="image-field" onChange={this.fileChangedHandler} required/><br />

		<button type="submit"  className="save-btn">Save</button>
		</div>
		</form>
		</div>
		)}
                </div>
</div>

        );

}

}

const mapStateToProps = state => {
  return {
          fetching: state.fetchingNotes,
	  saved: state.noteSaved,
	  id: state.id, //state.id.success
	  single: state.singleNote,
	  fetchedSingleNote: state.fetchedSingleNote
  };
};


export default connect(mapStateToProps, {resetCreateNotes, addNotesAction, fetchingSingleNote, fetchingCreatePage})(CreateNoteBody);





