import React, { Component } from 'react';
import axios from "axios";
import "../css/note.css"
import { viewNote } from '../actions';
import { noteUpdate } from '../actions';
import { connect } from 'react-redux';


class NoteEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            tags: '',
            title: '',
            textBody: '',
            id: '',
            select: null,
        };
    }


    componentDidMount() {
            this.props.viewNote(this.props.id)
            console.log("this.props.id", this.props.id)
            
         
          
      /*   const URL = 'https://fe-notes.herokuapp.com/note/get/' + this.props.id;
        axios
            .get(URL)
            .then(response => {
                this.setState(() => ({ notes: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            }); */
    }


    noteUpdate = () => {
        //const { tags, title, textBody } = this.props.noteSelected;
        const newRec = {
            tags: this.state.tags,
            title: this.state.title,
            textBody: this.state.textBody,
        }
        console.log("newRec", newRec)
        
        this.props.noteUpdate(newRec);
        //this.setState({ tags: '', title: '', textBody: '' });
        console.log("this.noteUpdate state:", this.state)
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      } 
  /*   noteUpdate = (e) => { */






      /*   e.preventDefault();
        const URL = 'https://fe-notes.herokuapp.com/note/edit/' + this.props.id;
        axios
            .put(URL, {
                tags: this.props.tags,
                title: this.props.title,
                textBody: this.props.textBody,
            })
            .then(response => {
                this.setState(() => ({ notes: response.data }));
            })
            .catch(error => {
                console.error('Server Error', error);
            }); */
    

    render() {
        return (
            <form className="note-edit-form" >
                <header className="note-create-header">Edit Note:</header>
                <input
                    type="text"
                    className="note-title-input"
                    placeholder={this.props.noteSelected.title}
                    value={this.props.value}
                    onChange={this.changeHandler}
                    name="title" />
                <textarea
                    type="text"
                    placeholder={this.props.noteSelected.textBody}
                    className="note-textarea"
                    value={this.props.value}
                    onChange={this.changeHandler}
                    name="textBody" />
                <button
                    className="update-button"
                    onClick={this.noteUpdate}>
                    Update
            </button>
            </form>
        );
    };
}
const mapStateToProps = state => {
	const { singleNoteReducer } = state;
	return {
	 // deletingNote: state.notesReducer.deletingNote,
	  error: state.notesReducer.error,
	 // showUpdate: state.singleNoteReducer.showUpdate,
	   noteSelected: state.singleNoteReducer.noteSelected 
	/*  notes: notesReducer.notes,  */
	/*  error: notesReducer.error, */
	
	};
  };
  
  export default connect(mapStateToProps, {
	/* deleteNote, */
/* 	updateSingleNote, */
	/* toggleShowUpdate, */
    viewNote,
    noteUpdate, 
  })(NoteEdit);
