import React from 'react';
import { Label } from './Label';

export const CardLarge = props => {
  return (
    <div
      className="CardLarge"
      onClick={() =>
        props.getNoteInfo({ title: props.title, content: props.content })
      }
    >
      <div className="Card_title">
        <Label name={props.title} fontSize="30px" />
      </div>
      <div className="Card_content">{props.content}</div>
    </div>
  );
};
