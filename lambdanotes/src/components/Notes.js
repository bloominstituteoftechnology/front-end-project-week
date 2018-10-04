import React from "react";
import axios from 'axios';
// import {Link} from 'react-router-dom';

 class Notes extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        notes: []
      }
  }
   componentDidMount() {
    const notesid = this.props.match.params.notesid;
    axios.get(`https://killer-notes.herokuapp.com/note/get/${notesid}`)
    .then(response => {
      this.setState({notes: response.data});
  })
  .catch(err => {
      console.log("Error in the Notes CDM!", err);
  });
}
   handleDelete = () => {
    const notesid = this.props.match.params.notesid;
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${notesid}`)
    .then(response => {
      this.setState(() => ({notes: response.data}))
    });
  }
   render() {
    return (
        <div>
            <div>
            {/* <Link to={`./edit/${this.state.note.id}`}>Edit</Link> */}
            <button onSubmit={this.handleDelete}>Delete</button>
            <button onSubmit={}>Update</button>
            </div>
            <h1>{this.state.notes.title}</h1>
            <p>{this.state.notes.textBody}</p>
        </div>
    );
  }
}
 export default Notes; 

