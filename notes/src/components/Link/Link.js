import React from 'react';

const Link = props => {
  return (
    <a className="link" href={props.href}>{props.text}</a>
  );
};

export default Link;