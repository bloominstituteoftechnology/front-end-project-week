import React from 'react';
import App from '../App';





function NoteList(props) {
  console.log(props, "this is in NoteLIst");
  return (
    <div className="list-item">
      {/* <p>{props.abc[0].id}</p> */}
      <ul>
        {props.abc.map(obj => {
          return <li key={obj.id}>{obj.text}</li>
        })}
      </ul>

    </div>
  )
}

export default NoteList;