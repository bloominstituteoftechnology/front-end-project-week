import React from 'react';
import {editNote, fetchSingleNote} from '../actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class EditNote extends React.Component {
    componentDidMount(){
        this.props.fetchSingleNote(this.props.match.params.id)
    }

    constructor(props){
        super(props)

        this.state = {
            title: this.props.currentNote.title,
            textBody: this.props.currentNote.textBody,
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

        this.props.editNote(this.props.currentNote._id, newNote);

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
      currentNote: state.currentNote
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
    editNote,
    fetchSingleNote
  })(EditNote));
  