import React from "react";
import { Link } from "react-router-dom";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      notes: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    let note = this.props.notes.filter(note => note.id === Number(id));
    this.props.handleSetCurrent(note[0]);
  }

  editCompleted = () => {
    this.props.handleEditNote(this.props.match.params.id);
  };

  render() {
    return (
      <div className="edit-note-div">
        <p className="edit-note-title"> Edit Note: </p>
        <form>
          <input
            className="edit-note"
            name="title"
            size='40'
            value={this.props.currentNote.title}
            onChange={this.props.handleEditTitle}
          />
          <br/> <br/>
          <textarea
            className="edit-note-content"
            type="text"
            cols="80"
            rows="10"
            name="content"
            value={this.props.currentNote.content}
            onChange={this.props.handleEditContent}
          />
          <Link to='/'>
          <div type='button' className="update-button" onClick={this.editCompleted}>Update</div>
          </Link>
        </form>
      </div>
    );
  }
}

export default EditNote;
