import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editNote } from '../actions';
import '../css/index.css';

class EditNote extends Component {
  state = {
    titleText: this.props.note.title,
    contentText: this.props.note.text,
  };

  render() {
    console.log('The properties of EditNote are:', this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            placeholder="New note" 
            value={this.state.titleText} 
            onChange={this.handleTitleChange}/>
          <input type="text" 
            placeholder="Add text here . . ." 
            value={this.state.contentText} 
            onChange={this.handleContentChange}/>
          <button type="submit">Add Note</button>
        </form>
      </div>
    )
  }

  handleTitleChange = (event) => {
    this.setState({titleText: event.target.value})
  }

  handleContentChange = (event) => {
    this.setState({contentText: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editNote(this.state.titleText, this.state.contentText, this.props.note.id);
    this.setState({titleText: ''});
    this.setState({contentText: ''});
  }
}

const mapStateToProps = (state) => {
  return {
    props: state,
  }
}


export default connect(mapStateToProps, { editNote })(EditNote);