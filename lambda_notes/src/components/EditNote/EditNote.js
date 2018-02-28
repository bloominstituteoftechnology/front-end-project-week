import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { editNote } from '../../actions';

class EditNote extends React.Component {
  state = {
    title: '',
    content: ''
  }
  render() {
    return (
    <div className="EditNote-Container">
      <Sidebar />
      <div className="EditNote">
        <h2>Edit Note: </h2>
        <input type="text" 
          placeholder="Note Title" 
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <textarea 
          rows="20" 
          cols="50" 
          placeholder="Note Content"
          value={this.state.content}
          onChange={this.handleContentChange}>
        </textarea>
        <button onClick={this.handleSubmit}>Update</button>
      </div>
    </div>
    )
  }
  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  }
  handleContentChange = (event) => {
    this.setState({content: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editNote(this.state, this.props.match.params.id);
    this.setState({title: '', content: ''})
    this.props.history.push(`/view/${this.props.match.params.id}`)
  }
  componentDidMount() {
    const notes = this.props.state.notes;
    const id = this.props.match.params.id;
    this.setState({
      title: notes[id].title,
      content: notes[id].content,
    });
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}
export default connect(mapStateToProps, { editNote })(EditNote);