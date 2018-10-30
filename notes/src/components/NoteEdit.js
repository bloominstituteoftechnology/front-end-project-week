import React from 'react';
import {editNote, fetchSingleNote} from '../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Modal, ModalBody } from 'reactstrap';

class NoteEdit extends React.Component {
    componentDidMount(){
        this.props.fetchSingleNote(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.currentNote !== this.props.currentNote){
            this.setState({
                title: nextProps.currentNote.title,
                content: nextProps.currentNote.content,
                tags: nextProps.currentNote.tags,
            })
        }
    }

    constructor(props){
        super(props)
        this.state = {
            title: this.props.currentNote.title,
            content: this.props.currentNote.content,
            tags: this.props.currentNote.tags,
            fetched: this.props.singleFetched,
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
        let noteTags = this.state.tags.split(/\s*,\s*/);

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

        let noteContent;
        if(this.state.content === ''){
            noteContent = 'No Content';
        } else {
            noteContent = this.state.content;
        }

        // SET USER ID TO 1 UNTIL LOGIN IS COMPLETE
        let newNote = {
            tags: uniqueTags.join(', '),
            title: noteTitle,
            content: noteContent,
            user_id: 1
        }

        this.props.editNote(this.props.currentNote.id, newNote);

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
            <textarea onChange={this.handleInput} name='content' value={this.state.content}></textarea>
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
      currentNote: state.currentNote,
      singleFetched: state.singleFetched
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
    editNote,
    fetchSingleNote
  })(NoteEdit));
  