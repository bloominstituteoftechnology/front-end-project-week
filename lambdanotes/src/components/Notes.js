import React from "react";
import axios from 'axios';

 class Notes extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        note: [],
        updatingNote: false,
      };
    }

   componentDidMount() {
    const noteId = this.props.match.params.noteId;
    axios.get(`https://killer-notes.herokuapp.com/note/get/${noteId}`, this.state.note)
    .then(response => {
      this.setState({title: response.data.title, textBody: response.data.textBody, id: response.data.id});
  })
  .catch(err => {
      console.log("Error in the Notes CDM!", err);
  });
}
  handleDelete = () => {
    const noteId = this.props.match.params.noteId;
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${noteId}`)
    .then(response => { this.setState( () => ({ note: response.data }));
      })
    .catch(error => {
      console.log("Error in handle delete", error);
    });
  }
  handleUpdatingNote = noteId => {
    axios.put(`https://killer-notes.herokuapp.com/note/edit/id/${noteId}`, this.state.note)
    .then(response => {
      console.log("handling update...maybe?", response);
      this.getNotes();
      this.props.history.push('/notesform') 
      this.setState({ updatingNote: false})
    });
  }

   render() {
     console.log("Note render", this.state);
    return (
        <div className="noteCardWrap">
              <div className="editingButts">
                <button onClick={this.handleDelete}>Delete</button>
                <button className="sumbitNoteButt" onClick={this.handleUpdatingNote}>Edit</button>
              </div>
              <div className="indiviNote">
              <h1>{this.state.title}</h1>
              <p>{this.state.textBody}</p>
            </div>
        </div>
    );
  }
}
 export default Notes; 

 //make buttons into Links

