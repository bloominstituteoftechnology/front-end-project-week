import React from "react"
import DeleteNote from "../deletenote/DeleteNote"
import "./ViewNote.css";
import { Link } from 'react-router-dom';


class ViewNote extends React.Component {
  deletePopup (){
   console.log("Hello World");
  }

  render(){
    return (
      <div>
        <Link to={`./${this.props.match.params.id}/edit`}>
          <small className="view-edit view-options">Edit</small>
        </Link>
        <small className="view-delete view-options">Delete </small>
        <h2>
          {this.props.notes[this.props.match.params.id].title}
        </h2>
        <div className="single-note">
          {this.props.notes[this.props.match.params.id].body}
        </div>
      </div>
    )
  }
}

export default ViewNote;
