import React from 'react';
import {connect} from 'react-redux';
import {addNote} from '../actions/index';
import {withRouter} from 'react-router-dom';

class NoteForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tags: [],
            title: '',
            textBody: '',
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

        console.log(noteTags);


        let newNote = {
            tags: noteTags,
            title: this.state.title,
            textBody: this.state.textBody,
        }

        this.props.addNote(newNote);

        this.setState({
            tags: [],
            title: '',
            textBody: '',
        })

    }

    render(){
        return(
            <div className = 'note-form-container'>
            <h1>Create New Note:</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInput} type = 'text' placeholder = 'Note Title' name='title' value={this.state.title}></input>
                    <textarea onChange={this.handleInput} placeholder = 'Note Content' name='textBody' value={this.state.textBody}></textarea>
                    <input onChange={this.handleInput} type='text' placeholder='Tags, separated by commas' name='tags' value={this.state.tags}></input>
                    <button type = 'submit'>Save</button>
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
    addNote
  })(NoteForm));
  