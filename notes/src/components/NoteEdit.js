import React from 'react';
import {editNote} from '../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class EditNote extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            textBody: '',
            currentNote: {}
        }

        props.notes.map(note => {
            if(note._id === props.match.params.id){
                let currentNote = Object.assign({}, note);
                this.state = Object.assign({}, this.state, {
                    title: currentNote.title,
                    textBody: currentNote.textBody,
                    currentNote: currentNote
                })
            }
            return null;
        })
    }

    handleInput = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        let newNote = {
            tags: [],
            title: this.state.title,
            textBody: this.state.textBody,
        }

        this.props.editNote(this.state.currentNote._id, newNote);

    }

    render() {
        return(
            <div className = 'note-edit-container'>
            
            <form onSubmit = {this.handleSubmit}>
            <input type = 'text' onChange={this.handleInput} name = 'title' value={this.state.title}></input>
            <textarea onChange={this.handleInput} name='textBody' value={this.state.textBody}></textarea>
            <button type='submit'>Update</button>
            </form>
            
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
    editNote
  })(EditNote));
  