import React from 'react';
import './note.css';
const Expand = props => {
    console.log(props);
    return (
        <div className="oneNoteExpanded" key={props.id}>
	  <h2>{props.location.state.note.title}</h2>
	  <p>{props.location.state.note.text}</p>
	</div>
    );
};
Expand.defaultProps = {
    id: 0,
    title: '',
    text: ''
};
export default Expand;


