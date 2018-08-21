import React from "react"
import "./ViewNote.css";
import { Link } from 'react-router-dom';
import DeleteNote from "../deletenote/DeleteNote"


class ViewNote extends React.Component {
  deletePopup (){
   var modal = document.querySelector(".delete-note");
   modal.style.display = "block";
  }
  closeDeletePopup(){
    var modal = document.querySelector(".delete-note");
    modal.style.display = "none";
  }

  render(){
    return (
      <div>
        <DeleteNote closePopup={this.closeDeletePopup} notes={this.props.notes} arrayIndex={this.props.match.params.id} deleteNote={this.props.deletenote}/>
        <Link to={`./${this.props.match.params.id}/edit`}>
          <small className="view-edit view-options">Edit</small>
        </Link>
        <small className="view-delete view-options" onClick={this.deletePopup}>Delete </small>
        <h2>
          {this.props.notes[this.props.match.params.id].title}
        </h2>
        <div className="single-note">
          {this.props.notes[this.props.match.params.id].content}
        </div>
      </div>
    )
  }
}

export default ViewNote;
