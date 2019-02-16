import React, { Component } from 'react';
import './Notes.css';
import axios from 'axios';

import { Link } from 'react-router-dom';

class ViewOneNote extends Component {
  constructor(props) {
      super(props);
      this.state = {
          note: {},
          loading: true
      }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
}
fetchNote = id => {
  axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(response => {
            this.setState({
          note: response.data,
          loading: false          
      })
  })
        .catch(err => {
           console.log(err)
  });
}
render(){
  return(
    <div className="contentContainer">
      <div className="linkContainer">
        <Link className="button" to={`/edit/${this.props.match.params.id}`}>Edit</Link>
        <Link className="button" exact to= {`/notes/delete/${this.props.match.params.id}`}>Delete</Link>
      </div>
      <div className="noteContainer">
        <h3>{this.state.note.title}</h3>
        <p>{this.state.note.textBody}</p>  
      </div>
    </div>
  )
}
}

export default ViewOneNote;
