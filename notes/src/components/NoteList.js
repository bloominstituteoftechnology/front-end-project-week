import React, { Component } from 'react';
// import axios from 'axios';
import '../App.css';
import {Link} from 'react-router-dom'
// import NoteCard from './NoteCard';

class NoteList extends Component {

  //componentDidMount() {
  //  axios
  //    .get('https://killer-notes.herokuapp.com/note/get/all')
  //    .then(res => this.setState({notes: res.data}))
  //    .catch(error => console.log(error))
  //  //axios stuff here

  //}
  
 // createNote = (noteData) => {
 //     axios
 //      .post('https://killer-notes.herokuapp.com/note/create', noteData ) 
 //      .then(res => this.setState({notes: res.data}) )
 //      .catch(err => console.log(err))
    
    
 //  }


  render() {
    return (
      <div className='note-container'>
      <div className='notes-headline'>
        <h2>Your Notes:</h2>
      </div>
      {this.props.notes.map(note => (
            <div key={note._id}className='note-card'>
            <div className='note-card-text'>
              <Link to={`/note/${note._id}`}><h4>{note.title}</h4></Link>
                <div className='note-card-text-body'>
                  <p>{note.textBody}</p>
                </div>
            </div>
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
