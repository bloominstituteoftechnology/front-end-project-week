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


  render() {
    return (
      <div className="App">
      {this.state.notes.map(note => (
            <div>
              <Link to={`/note/${note.id}`}><NoteCard note={note} /></Link>
            </div>
            ))}

      </div>
    );
  }
}

  function NoteDetails({note}) {
    // console.log('note details component', note)
    const { id } = note
      return(
          <Link to={`/note/${id}`}>
            <NoteCard note={note} />
          </Link>
          )

  }
export default NoteList;
