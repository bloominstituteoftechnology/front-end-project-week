import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { editNotes } from '../actions.js';
import { connect } from 'react-redux';

class Update extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title: props.location.state.currentNote.title,
            text: props.location.state.currentNote.text
        };
    }
    handleTextInput = e => {
        this.setState({ [e.target.name]: e.target.value});
    }
    newUpdate = () => {
        const edited ={
            title: this.state.title,
            text: this.state.text,
            id: this.props.location.state.currentNote.id
        }
        this.props.editNotes(edited);
    }
    render() {
        return (
        <div>

  <input 
  value={this.state.title}
type='text'
name="title"
placeholder="Note Title Here"
onChange={this.handleTextInput}

/>

 <input 
value={this.state.text}
type='text'
name="text"
placeholder="Note Text Here"
onChange={this.handleTextInput}

/>
<Link to="/" onClick={() => this.newUpdate()}><button type="submit">Update Note</button></Link>

    </div>
        )}
}
export default connect(null, { editNotes })(Update);