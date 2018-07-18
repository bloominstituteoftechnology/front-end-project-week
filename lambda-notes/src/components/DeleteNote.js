import React from "react";
import { Link } from "react-router-dom";

class DeleteNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.handleSetCurrent(id);
  }

  deleteCompleted = () => {
    this.props.handleDeleteNote(this.props.match.params.id);
  };

  render() {
    return (
      <div className="delete-div">
        <div className="delete-message-div">
          <p className="delete-message-question">
            {" "}
            Are you sure you want to delete this?
          </p>
          <div className="delete-message-buttons">
          <Link className="delete-button-link"to="/">
            <div
              className="delete-button-delete"
              onClick={this.deleteCompleted}
            >
              Delete
            </div>
          </Link>
          <div
            type="button"
            className="delete-button-no"
            onClick={this.props.toggleDeleting}
          >
            No
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteNote;
