import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
  return (
    <React.Fragment>
      <button className={props.type}>
        {(props.link !== null) ? <Link to={props.link}></Link> : props.title}
      </button>
    </React.Fragment>
  );
}

export default Button;