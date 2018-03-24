import React from 'react';
import { Label } from '../AtomComps/Label';

export const Card = props => {
  return (
    <div className="Card">
      <div className="Card_title">
        <Label name={props.title} fontSize="20px" />
      </div>
      <div className="Card_content">{props.content}</div>
    </div>
  );
};
