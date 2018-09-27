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

        this.state = {
            title: this.props.currentNote.title,
            textBody: this.props.currentNote.textBody,
            tags: this.props.currentNote.tags,
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
        if(this.state.tags.length === 0){
            noteTags = 'Uncategorized';
        } else {
            noteTags = this.state.tags.split(/\s*,\s*/);
        }
        

        let newNote = {
            tags: noteTags,
            title: this.state.title,
            textBody: this.state.textBody,
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
            <input type = 'text' name='tags' onChange = {this.handleInput} value = {this.state.tags}></input>
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
  