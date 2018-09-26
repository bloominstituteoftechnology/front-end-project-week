import React from 'react';
import {editNote} from '../actions';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

let currentNote = {};

class EditNote extends React.Component {
    constructor(props){
        super(props)
    
        {props.notes.map(note => {
            if(note._id === props.match.params.id){
                
                currentNote = Object.assign({}, note);
            }
        })}

        this.state = {
            title: currentNote.title,
            textBody: currentNote.textBody
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
        let newNote = {
            tags: [],
            title: this.state.title,
            textBody: this.state.textBody,
        }

        this.props.editNote(currentNote._id, newNote);

    }

    render() {
        return(
            <div>This is the edit page
                <form onSubmit = {this.handleSubmit}>
            <input type = 'text' onChange={this.handleInput} name = 'title' value={this.state.title}></input>
            <input type = 'text' onChange={this.handleInput} name='textBody' value={this.state.textBody}></input>
            <button type='submit'>Submit Edits</button>
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
  