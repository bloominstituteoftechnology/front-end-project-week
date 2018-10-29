import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import {Link} from 'react-router-dom'
import NoteCard from './NoteCard';

class NoteList extends Component {
  constructor() {
    super()
      this.state = {
        notes: [],
      }
  }

  componentDidMount() {
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(res => this.setState({notes: res.data}))
      .catch(error => console.log(error))
    //axios stuff here

  }
  
  updateNote = (noteData) => {
      .post('https://killer-notes.herokuapp.com/note/create', noteData ) 
      .then(res => )
      .catch(err => console.log(err))
    
    
  }


  render() {
    return (
      <div className="App">
      {this.state.notes.map(note => (
        <div>
          <Link 
            to={{pathname: `/note/${note._id}`, state: note}}
            >
            {note.title}
          </Link>
            <p>{note.textBody}</p>
        </div>
       ))}
      </div>
    );
  }
}

  // function NoteDetails({note}) {
  //   // console.log('note details component', note)
  //   const { id } = note
  //     return(
  //         <Link to={`/note/${id}`}>
  //           <NoteCard note={note} />
  //         </Link>
  //         )

  // }
export default NoteList;
