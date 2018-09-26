import React, { Component } from "react";
import "./index.css";
import { Link } from 'react-router-dom';
import axios from "axios";

const URL = 'http//:localhost:8000/notes/';
class NotesList extends Component {
  constructor() {
    super();
    this.state = {
     notes: [],
  }
}

getNotes = () => {
  console.log('hi');

axios
  .get('http://localhost:8000/notes')
  .then(response => this.setState({notes: response.data}))
  .catch(error => console.log(error));
}

componentDidMount(){
  this.getNotes();
  
}

  render() {
    return (
      <div classname="notelist_container">
        <div className="content_header">
          <h3> Your Notes: </h3>
        </div>
        
        <div className="notesList" >
        {this.state.notes.map((note, index) => {
          return (
             <Link to={`/note/${note._id}`} className='unstyled_link'>
            <div className="note" key={note._id}>
              <div>
                <h4>{note.title}</h4>
                <hr />
                <p>{note.body}</p>
              </div>
            </div>
            </Link>
          );
        })}
        </div>
        
      </div>
    );
  }
}

export default NotesList;
