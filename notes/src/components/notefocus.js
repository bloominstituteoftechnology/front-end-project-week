import React from "react";
import "../CSS/notefocus.css";
import { Link } from "react-router-dom";
import axios from "axios";

class NoteFocus extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      note: {},
      deleting: false,
    }
  }

  componentDidMount() {
    this.noteView(this.props.match.params._id);
  }
 
  noteView = (id) => {
    axios
  .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
  .then(response => {
    this.setState(() => ({note: response.data}))
  })
  .catch(error => {
    console.error('Server Error', error);
  });
  }

 render(){
   console.log(this.state.note)
  return (
    <div className="focus">
      <div className={this.props.deleting ? "delete" : "hide-delete"}>
        <div className="modal">
          <p>Are you sure you want to delete this?</p>
          <div className="btns">
            <Link className="linkdel" to="/">
              <div
                onClick={() => this.props.noteDelete(this.props.match.params._id)}
                className="deletebtn"
              >
                Delete
              </div>
            </Link>
            <div onClick={this.props.deleteModal} className="nobtn">
              No
            </div>
          </div>
        </div>
      </div>
      <div className="edit-del">
        <Link className="linkedit" to={`/notes/edit/${this.props.match.params._id}`}>
          <p onClick={() => this.props.editNote(this.props.match.params._id)}>edit</p>
        </Link>
        <p onClick={this.props.deleteModal}>delete</p>
      </div>
      <h1 className="focustitle">{this.state.note.title}</h1>
      <div className="notetxt">{this.state.note.textBody}</div>
    </div>
  );
}
};

export default NoteFocus;
