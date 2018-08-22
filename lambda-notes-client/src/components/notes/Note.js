import React from 'react';
import '../../index.css';

import { Link } from 'react-router-dom';


const Note = props => {

  function shortenDesc (desc) {
    // max length 115chars
    let arr = [];
    let newArr = [];
    let result = '';

    if (desc.length > 115) {

      arr = desc.split('');
      for (let i = 0; i < 115; i++) {
        newArr.push(arr[i])
      }
      result = newArr.join('') + '...';
      return result;

    } else {

      return desc;
    }
  }

  return (
    <Link className="article-note__linked" to={`/notes/${props.id}`}>
      <h3>{props.title}</h3>
      <hr className="underline" />
      <p>{shortenDesc(props.description)}</p>
    </Link>
  );
}

export default Note;
