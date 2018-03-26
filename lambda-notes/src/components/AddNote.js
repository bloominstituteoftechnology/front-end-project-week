import React, { Component } from 'react';
import { addNote } from '../actions';
import { connect } from 'react-redux';

class AddNote extends Component {
  state = {
    title: '',
    text: ''
  }
  
  handleInputChange({ target }) {
    this.setState({
      note: target.value
    });
  }

  handleSubmit() {
    this.props.addNote(this.state.note);
    this.setState({
      note: ''
    });
  }

  render() {
    return (
      <div>
        <input 
          onChange={(event) => this.handleInputChange(event)}
          value={this.state.note}
          placeholder='Add Text'
        />
        <button onClick={() => this.handleSubmit()}>Add Note</button>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProp, { addNote })(AddNote);