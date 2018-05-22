import React from 'react';
import { Link } from 'react-router-dom';

const SimpleLink = props => {
  return (
    <React.Fragment>
      <Link to={props.link}>{props.title}</Link>
    </React.Fragment>
  );
}
 
export default SimpleLink;