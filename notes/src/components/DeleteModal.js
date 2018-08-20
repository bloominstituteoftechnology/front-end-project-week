import React from 'react';
import ReactDOM from 'react-dom';

class DeleteModal extends React.Component{
  constructor(props){
    super(props);
    this.rootSelector = document.getElementById("root-modal");
    this.container = document.createElement("div");
  }

  componentDidMount() {
    this.rootSelector.appendChild(this.container);
  }

  componentWillUnmount(){
    this.rootSelector.removeChild(this.container)
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal-background">
        <div className="modal-body">
          <div className="delete-message">
            Are you sure you want to delete this?
          </div>
          <div
            className="btn btn-delete"
            onClick={this.props.deleteNote}
          >
            Delete
          </div>
          <div
            className="btn"
            onClick={this.props.cancelDelete}
          >
            No
          </div>
        </div>
      </div>
        , this.rootSelector);
  }
}

export default DeleteModal;
