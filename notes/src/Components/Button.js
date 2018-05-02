import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  return(
    <div>
      <Link to={props.button.route}>
        <button className="button">{props.button.text}</button>
      </Link>
    </div>
  );
}

