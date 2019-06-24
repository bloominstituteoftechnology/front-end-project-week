import React, { Component } from 'react';
import { data } from '../NoteData';
import Sidebar from './Sidebar';
import ViewNote from './ViewNote';
import { Link } from 'react-router-dom';
// import { Container, Row, Col } from 'react-strap';
import '../styles/NoteList.css';

class NoteList extends Component {
    constructor() {
        super()
        this.state = {
          notes: []
        }
      }
    
      componentDidMount() {
        this.setState({ notes: data })
      }

    render() {
    return (
        <div className="Notes">
        <Sidebar />
        <h2>Your Notes:</h2>
        {this.state.notes.map(note => {
        return <div key={note.id}>
        <Link to={{pathname: `/viewNote/${note.id}`, state: {title: note.title, body: note.body, id: note.id}}} style={{textDecoration: 'none'}}>
        <h1>{note.title}</h1>
        <p>{note.body}</p></Link></div>
        })}
        </div>
    )
}
}


export default NoteList;