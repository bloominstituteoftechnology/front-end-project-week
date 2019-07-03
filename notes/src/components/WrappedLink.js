import React from 'react';
import { Link } from 'react-router-dom';

const WrappedLink = props => {
  return(
    <button className="header-btn">
      <Link to={props.route}>{props.name}</Link>
    </button>
  )
}

export default WrappedLink;
