import React from 'react';
import {connect} from 'react-redux';
import {addNote} from '../actions/index';
import {withRouter} from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';

class NoteForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tags: '',
            title: '',
            textBody: '',
            submitted: false
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
        /* Set tag to Uncategorized if no input is given */
        let noteTags;
        if(this.state.tags === ''){
            noteTags = 'Uncategorized'
        } else {
            noteTags = this.state.tags.split(/\s*,\s*/);
        }

        let uniqueTags = noteTags;
        if(this.state.tags !== ''){
        uniqueTags = noteTags.reduce(function(a,b){
            if (a.indexOf(b) < 0 ) a.push(b);
            return a;
          },[]);
        }

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

        console.log(newNote);
        this.props.addNote(newNote);

        this.setState({
            tags: [],
            title: '',
            textBody: '',
            submitted: !this.state.submitted
        })

        setTimeout(() => this.props.history.push('/'), 1500);
            

    }

    render(){
        return(
            <div className = 'note-form-container'>
            <h1>Create New Note:</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInput} type = 'text' placeholder = 'Note Title' name='title' value={this.state.title}></input>
                    <textarea onChange={this.handleInput} placeholder = 'Note Content' name='textBody' value={this.state.textBody}></textarea>
                    <input onChange={this.handleInput} type='text' placeholder='Tags, separated by commas' name='tags' value={this.state.tags} maxLength='50'></input>
                    <button type = 'submit'>Save</button>
                </form>

                <Modal isOpen={this.state.submitted} toggle={this.submitted} className='deleted-modal'>
            <ModalBody>
                Note successfully submitted. Returning to notes view.
            </ModalBody>
            </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      notes: state.notes
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
    addNote
  })(NoteForm));
  