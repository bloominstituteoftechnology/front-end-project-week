import React from 'react';
// import './note.css';
import Note from './note.js';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from "react-router-dom";

const Expand = props => {
    console.log(props);
    return (
        <div className="oneNote" key={props.id}>
	  <Link
	    key={props.location.state.note.id}
	    to={{pathname:`/notes/${props.location.state.note.id}/edit`,
	    state:{note: props.location.state.note}}}>
	    Edit
	  </Link>
	  <h2>{props.location.state.note.title}</h2>
	  <p>{props.location.state.note.text}</p>
	</div>
    );
};

//<Link key={note.id} to={{pathname:`/notes/${note.id}/edit`, state:{note}}}>Edit</Link>
//<Link to={`${this.context.location.pathname}/picture/`}>Edit</Link>

Expand.defaultProps = {
    id: 0,
    title: '',
    text: ''
};
export default Expand;


