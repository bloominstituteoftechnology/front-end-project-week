import React from 'react';

const Title = props => {
  return (
    <div className="view-header">
      <h1>{props.title}:</h1>
    </div>
  );
}

export default Title;