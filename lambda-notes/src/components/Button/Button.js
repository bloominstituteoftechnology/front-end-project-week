import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
  return (
    <React.Fragment>
      {
        (props.link !== null) 
          ? <Link className={`btn ${props.type}`} to={props.link}>{props.title}</Link>
          : <button className={`btn ${props.type}`}>{props.title}</button>
      }
    </React.Fragment>
  );
}

export default Button;