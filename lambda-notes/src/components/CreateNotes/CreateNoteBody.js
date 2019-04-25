import React, { Component } from 'react';
import { connect } from 'react-redux';
import {resetCreateNotes, addNotesAction, fetchingSingleNote, fetchingCreatePage} from "../../actions";
import LambdaLeftDiv from '../ViewNotes/LambdaLeftDiv'
import {FadeLoader} from 'react-spinners';
import { css } from 'react-emotion';
import styled from 'styled-components';

const fadeloader = css`
    display: block;
    margin: 5%  auto;
`;


const Image = styled.img`
        margin-top: 4%;
        margin-bottom: 1%;
        max-height: 300px;
`;


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
	this.props.addNotesAction(this.state.title, this.state.content, this.state.selectedFile);
	//this.setState({title: "", content: "", selectedFile:null});

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
		
		<div className="note-card-container">{this.props.addingNote ? (
		<div>
		<h4 className="note-save-message">Saving Note</h4>	
                <FadeLoader  className={fadeloader}    color={'#36D7B7'}  size={200} />
		</div>
                ) :(
		
                <div className="note-card-container">{this.props.fetchedSingleNote? (
		<div>	
		<h4 className="note-save-message">New Note Created</h4>
		

		<h3 className="single-note-title">{this.props.single.title}</h3>
                <div className="single-note-container">{this.props.single.content}</div>
		<Image src={this.props.single.image} alt={this.props.single.title} />	
		</div>

		):(
		<div>
		<h3 className="new-note-title">Create New Note:</h3>

		<form onSubmit={(e)=>{this.addNote(e)}} >
		<div className="input-container">	
		<input onChange={this.changeHandler} className="title-style" type="text" name="title" placeholder="Note Title" value={this.state.title} required /><br />
               
	       <textarea onChange={this.changeHandler} className="content-style" type="text" name="content" placeholder="Note Content" value={this.state.content} required></textarea><br />
		
		<h5 className="new-note-title">Add image</h5>	
		<input type="file" className="image-field" onChange={this.fileChangedHandler} required/><br />

		<button type="submit"  className="save-btn">Save</button>
		</div>
		</form>
		</div>
		)}
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
	  addingNote: state.addingNote,
	  id: state.id, //state.id.success
	  single: state.singleNote,
	  fetchedSingleNote: state.fetchedSingleNote
  };
};


export default connect(mapStateToProps, {resetCreateNotes, addNotesAction, fetchingSingleNote, fetchingCreatePage})(CreateNoteBody);





