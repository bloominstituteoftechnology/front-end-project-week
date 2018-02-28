import React from 'react';
import './NoteList.css';

function NoteList(props) {
  
  function NewNote () {
    return (
      <NewNote />
    )
  }

  return (
    
    <div className="App">
      <div className="leftBar">
        <div>
          <h1>Lambda</h1>
          <h2>Notes</h2>
          <button className="btns">View Your Notes</button>
          <button className="btns" onClick={NewNote}>+ Create New Note</button>
        </div>
      </div>
      <div className="rightBar">
        <div>
          <div className="yourNotes">
            <h3>Your Notes:</h3>
          </div>
          <ul>
            {props.abc.noteItem.map(obj => {
              return (
                <li key={obj.id}>
                  <div>
                    <p className="noteTitle">{obj.title}</p>
                    <hr />
                    <div>{obj.text}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NoteList;
