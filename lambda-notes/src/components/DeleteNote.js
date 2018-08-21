import React from "react";
import axios from "axios";

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
    this.setState({ id: id });
  }


  handleDeleteNote = e => {
    const id = this.state.id;
    axios
      .delete(`http://localhost:8000/api/notes/${id}`)
      .then(response => {
        this.props.history.push("/");
        this.setState({ id: null });
        this.props.toggleDeleting();
        this.props.handleRefresh();
      })
      .catch(err => {
        console.log(err);
      });
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
            <div
              className="delete-button-delete"
              onClick={this.handleDeleteNote}
            >
              Delete
            </div>
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
