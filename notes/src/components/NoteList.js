import React from 'react';
import App from '../App';
// import StyledList from './StyleList';
import './NoteList.css';

function NoteList(props) {
  console.log(props, 'this is props');
  console.log(props.abc, 'this is props.abc');
  console.log(props.abc.noteitem, 'this is props.abc.noteitem');
  return (
    <div className="App">
      <div className="leftBar">
        <div>
          <h1>Lambda</h1>
          <h2>Notes</h2>
          <button className="btns">View Your Notes</button>
          <button className="btns">+ Create New Note</button>
        </div>
      </div>
      <div className="rightBar">
        <div className="list-item">
          <div className="yourNotes">
            <h3>Your Notes:</h3>
          </div>
          <ul>
            {props.abc.noteItem.map(obj => {
              return (
                <ul>
                  <div>
                    <div>
                      <li className="noteTitle" key={obj.id}><p>Note Title</p></li>
                    </div>
                    <hr />
                    <div>
                      <li key={obj.id}>{obj.text}</li>
                    </div>
                  </div>
                </ul>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NoteList;
