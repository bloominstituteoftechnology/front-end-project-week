import React from 'react';
import { Link } from 'react-router-dom';

const ViewNote = (props) => {
  // (props) ? console.log(props.match.params.id) : null;

  return (
    <div>
      <div>
        <span> <Link to={`/edit-note/${props.id}`}>edit </Link> </span>
         <span> delete </span>
      </div>
      <div>
        {props.title}
      </div>
      <div>
        {props.textBody}
      </div>
    </div>
  );
};

export default ViewNote;