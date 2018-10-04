import React from "react";
import axios from 'axios';
// import {Link} from 'react-router-dom';

 class Notes extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        title: "",
        textBody: "",
        id: "",
      }
  }
   componentDidMount() {
    const noteId = this.props.match.params.noteId;
    axios.get(`https://killer-notes.herokuapp.com/note/get/${noteId}`)
    .then(response => {
      this.setState({title: response.data.title, textBody: response.data.textBody, id: response.data._id});
  })
  .catch(err => {
      console.log("Error in the Notes CDM!", err);
  });
}
   handleDelete = () => {
    const notesId = this.props.match.params.notesId;
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${notesId}`)
    .then(response => {
      this.setState(() => ({notes: response.data}))
    });
  }
   render() {
    return (
        <div>
            <div>
            {/* <Link to={`./edit/${this.state.note.id}`}>Edit</Link> */}
            <button onClick={this.handleDelete}>Delete</button>
            <button onClick={event => {event.preventDefault(); 
              this.props.goToUpdateNoteForm()}}>Update</button>
            </div>
            <h1>{this.state.title}</h1>
            <p>{this.state.textBody}</p>
        </div>
    );
  }
}
 export default Notes; 

