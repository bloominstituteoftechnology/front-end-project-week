import React, {Component} from "react"
import Note from './Note'
import {Container, CardGroup} from 'reactstrap';
import {Link} from 'react-router-dom'

const Notes = (props) => {
    return (<Container>
      <CardGroup  >
        {
          props.notes.map(note => (<div className="note" key={note._id}>
            <Link to={`/notes/${note._id}`} >
              <Note note={note} />
            </Link>
          </div>))
        }
      </CardGroup>
    </Container>);

};

export default Notes;
