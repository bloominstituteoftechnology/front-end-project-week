import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addNotesAction} from "../../actions";
import LambdaLeftDiv from '../ViewNotes/LambdaLeftDiv'
import {fetchingSingleNote, editNoteAction} from "../../actions";

class EditNoteBody extends React.Component {

constructor(props){
        super(props);
        this.state= {
		title: props.single.title,
		content: props.single.content
	};

  }


componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchingSingleNote(id);
}

editNote = event => {
	const id = this.props.match.params.id;
	this.props.editNoteAction(id, this.state.title, this.state.content);
}

changeHandler = event => {
	 this.setState({[event.target.name]: event.target.value});

}



render() {
        return(
                <div className="view-list-body desktop-view tablet-view">
                <LambdaLeftDiv />
                <div className="note-card-container">
                <div>{this.props.edited ? 
		(<div>
		<h3 className="delete-note-message">Note successfully edited and saved</h3>
		<h3 className="single-note-title">{this.props.editedNote.title}</h3>
                <div className="single-note-container">{this.props.editedNote.content}</div>
		</div>	
		
		) :(    
	        <div className="input-container">
		<h3 className="new-note-title">Edit Note:</h3>
		<input onChange={this.changeHandler} className="title-style" type="text" name="title" value={this.state.title} /><br />
                <textarea onChange={this.changeHandler} className="content-style" type="text" name="content" value={this.state.content}></textarea><br />
                <button onClick={this.editNote} className="save-btn">Update</button>
                        </div>
)}</div>                
                </div>
                </div>
        );
}
}

const mapStateToProps = state => {
  return {
	  single: state.singleNote,
	  edited: state.noteEdited,
	  editedNote: state.editedSingleNote
  };
};


export default connect(mapStateToProps, {fetchingSingleNote, editNoteAction})(EditNoteBody);
