import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { updateNote } from '../REDUX/actions';
import { connect } from 'react-redux';

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.location.state.note.title,
      content: props.location.state.note.content
    };
  }

  updateNote = () => {
    const { note } = this.props.location.state;
    const updated = {
      title: this.state.title,
      content: this.state.content,
      id: note.id
    }
    this.props.updateNote(updated);
  }

  render() {
    // const { note } = this.props.location.state;
    return (
      <div className="PrimaryContainer__newNote">
        <h1 className="PrimaryContainer__header">Edit Note:</h1>
        <Input 
          type="text"
          className="col-7"
          name="title"
          placeholder="Note Title"
          value={this.state.title}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <br/>
        <Input 
          type="textarea"
          name="content"
          placeholder="Note Content"
          value={this.state.content}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <br/>
        <Link to="/">
          <button className="Button col-3" onClick={() => this.updateNote()}>Update</button>
        </Link>
      </div>
    )
  }
}

export default connect(null, { updateNote })(EditNote);
// export default EditNote;