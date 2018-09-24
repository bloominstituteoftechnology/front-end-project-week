import React from 'react';
import {connect} from 'react-redux';
import {addNote} from '../actions/index';

class NoteForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            content: '',
            id: props.currentID
        }
    }

    // componentDidMount(){
        
    // }

    handleInput = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let newNote = {
            title: this.state.title,
            content: this.state.content,
            id: this.props.currentID
        }

        this.props.addNote(newNote);

        this.setState({
            title: '',
            content: '',
            id: this.props.currentID
        })
    }

    render(){
        return(
            <div>
                NOTE FORM
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInput} type = 'text' placeholder = 'Note Title' name='title' value={this.state.title}></input>
                    <input type='text' onChange={this.handleInput} placeholder = 'Note Content' name='content' value={this.state.content}></input>
                    <button type = 'submit'>Add Note</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      notes: state.notes,
      currentID: state.currentID
    }
  }
  
  export default connect(mapStateToProps, {
    addNote
  })(NoteForm);
  