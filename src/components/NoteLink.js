
import React from 'react';
import { Link } from 'react-router-dom';

const NoteLink = (props) => {
 return (
     <Link to={props.link} className="btn-link">
     <button className={`btn ${props.color}`}>{props.value}
     </button>
     </Link>
 )
}
export default NoteLink;