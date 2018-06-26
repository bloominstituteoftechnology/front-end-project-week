import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import NoteCard from "./NoteCard";
import { Col, Card, Row, Container, CardColumns } from "reactstrap";
import Note from "./Note";
import NavBar from "./NavBar";
import "./NoteCss.css";
import DeleteModal from './deleteModal';
class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
      }
  }

  componentWillMount() {
    axios
    .get('http://localhost:5000/api/notes')
    .then(response => {
      const notes = response.data;
      this.setState(() => ({ notes }));
      console.log('notelist state', this.state.notes)
    })
    .catch(err => {
      console.error("Server Error", err);
    })
  }
  render() { 
    return (  

    <Container className="mainContainer" style={{ display: "flex" }}>
      <Col sm="3" className="navCol">
        <NavBar className="navBar"/>
      </Col>
      {/* EndNav */}
      <Container className="notesContainer">
          <br/>
          <br/>
          <h3 style={{ paddingTop: '10px', marginBottom: '-1px' }} >Your Notes:</h3>
          <br/>
          <CardColumns>
           
            {this.state.notes.map(note => {
              return (
                <Link to={`/note/${note._id}`} note={note} style={{ textDecoration: "none", color: "black" }}>
              <NoteCard key={note._id} note={note} title={note.title} content={note.content} />
              </Link>
              )
            })}

            </CardColumns>
        
       
      </Container>
    </Container>

    )
  }
}
 
export default NoteList;


//     <Link to={`/notes/${props.id}`}>
// <div>
// <h3>{props.title}</h3>
// <p>{props.content}</p>
// </div>
// </Link>
// );
// };
