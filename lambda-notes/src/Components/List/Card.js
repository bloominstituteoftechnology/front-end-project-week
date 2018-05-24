import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText } from 'reactstrap';
import render from 'react-dom'

const NoteCard = (props) => {
    console.log(props);
    const {id, note_title, note_body} = props.note;
    return(
    <div className="note-card">
    <Link to={`/list/${id}`} key={id}>
        Title:<h2>{note_title}</h2>
    </Link>
    <div className="body">
        Note:<em>{note_body}</em>
    </div>
    ))}
  </div>
        )
    }
    

export default NoteCard;