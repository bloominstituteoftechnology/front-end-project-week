import React from 'react';
import {connect} from 'react-redux';
import {addNote} from '../actions/index';

class NoteForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tags: [],
            title: '',
            textBody: '',
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
            tags: [],
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
            <div>
                NOTE FORM
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInput} type = 'text' placeholder = 'Note Title' name='title' value={this.state.title}></input>
                    <input type='text' onChange={this.handleInput} placeholder = 'Note Content' name='textBody' value={this.state.textBody}></input>
                    <button type = 'submit'>Add Note</button>
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
  
  export default connect(mapStateToProps, {
    addNote
  })(NoteForm);
  