import React from 'react';
import {connect} from 'react-redux';
import {addNote} from '../actions/index';

class NoteForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            content: '',
            id: this.props.currentID
        }
    }

    componentDidMount(){
        console.log(`the current note ID is: ${this.props.currentID}`);
    }

    handleInput = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
                NOTE FORM
                <form>
                    <input onChange={this.handleInput} type = 'text' placeholder = 'Note Title' name='title' value={this.state.title}></input>
                    <textarea onChange={this.handleInput} placeholder = 'Note Content' name='content' value={this.state.content}></textarea>
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
  