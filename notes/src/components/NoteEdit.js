import React from 'react';
import {editNote, fetchSingleNote} from '../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';

class NoteEdit extends React.Component {
    componentDidMount(){
        this.props.fetchSingleNote(this.props.match.params.id);
    }


    constructor(props){
        super(props)

        let mapTags = this.props.currentNote.tags.map(tag => {
            return tag;
        })

        let stringTags = mapTags.join(', ');

        this.state = {
            title: this.props.currentNote.title,
            textBody: this.props.currentNote.textBody,
            tags: stringTags,
            edited: false
        }
    }

    handleInput = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let noteTags;
        if(this.state.tags === ''){
            noteTags = [];
        } else {
            noteTags = this.state.tags.split(/\s*,\s*/);
        }

        let uniqueTags = noteTags.reduce(function(a,b){
            if (a.indexOf(b) < 0 ) a.push(b);
            return a;
          },[]);

        let noteTitle;
        if(this.state.title === ''){
            noteTitle = 'Untitled';
        } else {
            noteTitle = this.state.title;
        }

        let textBody;
        if(this.state.textBody === ''){
            textBody = 'No Content';
        } else {
            textBody = this.state.textBody;
        }

        let newNote = {
            tags: uniqueTags,
            title: noteTitle,
            textBody: textBody,
        }

        this.props.editNote(this.props.currentNote._id, newNote);

        this.setState({
            edited: !this.state.edited
        })
        setTimeout(() => this.props.history.push('/'), 1500);
    }

    render() {

        return(
            <div className = 'note-edit-container'>
            
            <form onSubmit = {this.handleSubmit}>
            <input type = 'text' onChange={this.handleInput} name = 'title' value={this.state.title}></input>
            <textarea onChange={this.handleInput} name='textBody' value={this.state.textBody}></textarea>
            <input type = 'text' name='tags' onChange = {this.handleInput} value = {this.state.tags} maxLength='50'></input>
            <button type='submit'>Update</button>
            </form>
            
            <Modal isOpen={this.state.edited} toggle={this.edited} className='popup-modal'>
            <ModalBody>
                Note successfully edited. Returning to notes view.
            </ModalBody>
            </Modal>


            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      currentNote: state.currentNote
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
    editNote,
    fetchSingleNote
  })(NoteEdit));
  