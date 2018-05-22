
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { connect } from 'react-redux';
import { editNote } from '../../actions';
import './EditNote.css'

class EditNote extends React.Component {
  state = {
    title: '',
    content: ''
  }
  render() {
    return (
    <div className="Container">
      <div className="Sidebar-Container">
        <Sidebar />
      </div>
      <div className="Edit-Note">
        <header>
          <h2>Edit Note: </h2>
        </header>
        <form className="Edit-Note-Form" onSubmit={this.handleSubmit}>
        <input className="Edit-Note-Title" 
          type="text" 
          placeholder="Note Title" 
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <textarea className="Edit-Note-Content"
          rows="20" 
          cols="30" 
          placeholder="Note Content"
          value={this.state.content}
          onChange={this.handleContentChange}>
        </textarea>
        <button className="Save-Button" type="submit">Update</button>
        </form>
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