import React, {Component} from "react"
import Note from './Note'
import {Container, CardGroup} from 'reactstrap';
import {Link} from 'react-router-dom'

class Notes extends Component {
  render() {
    console.log("notes", this.props.notes)
    return (<Container>
      <CardGroup>
        {
          this.props.notes.map(note => (<div key={note.id}>
            <Link to={`/notes/${note.id}`}>
              <Note note={note} />
            </Link>
          </div>))
        }
      </CardGroup>
    </Container>);
  }
};

export default Notes;
