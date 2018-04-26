import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
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

  stageUpdate = () => {
    const { note } = this.props.location.state;
    const updated = {
      title: this.state.title,
      content: this.state.content,
      id: note.id
    }
    this.props.updateNote(updated);
  }

  render() {
    return (
      <div className="PrimaryContainer__newNote">
        <h1 className="PrimaryContainer__header">Edit Note:</h1>
        <Input 
          type="text"
          name="title"
          className="col-7"
          placeholder="Note Title"
          value={this.state.title}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <br/>
        <Input 
          className="ContentInput"
          type="textarea"
          name="content"
          placeholder="Note Content"
          value={this.state.content}
          onChange={event => this.setState({ [event.target.name]: event.target.value })}
        />
        <br/>
        <Link to="/home" onClick={() => this.stageUpdate()}>
          <Button className="Button col-3">Update</Button>
        </Link>
      </div>
    )
  }
}

export default connect(null, { updateNote })(EditNote);
// export default EditNote;