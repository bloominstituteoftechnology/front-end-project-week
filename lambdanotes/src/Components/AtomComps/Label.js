import React from 'react';

export const Label = props => {
  return (
    <div style={{ fontSize: props.fontSize, fontWeight: 'bold' }}>
      {props.name}
    </div>
  );
};
