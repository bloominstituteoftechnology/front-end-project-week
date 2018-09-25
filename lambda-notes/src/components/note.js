import React from 'react';

const Note = props => {
    return (
        <div>
          <h2>{props.title}</h2>
	  <p>{props.text}</p>
	</div>
    );
};

Note.defaultProps = {
    title: '',
    text: ''
};

export default Note;
