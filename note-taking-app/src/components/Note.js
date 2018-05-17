import React, { Component } from 'react';

const Note = ({title, content}) =>
  <div>
    <h4>{title}</h4>
    <p>{content}</p>
  </div>

export default Note;