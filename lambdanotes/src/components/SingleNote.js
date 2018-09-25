import React from 'react';
import './SingleNote.css';


const SingleNote = (props) => {
    // console.log(props.notes);
    return (
        <div className="cards-container">
        <div className="links">
        <button className="edit"><span>edit</span></button>
        <button className="delete"><span>delete</span></button>
        </div>
          <div className="statement">
          <h2>Note Name</h2>
          </div>
          <div className="cards">
          <p>Note Content</p>
          </div>
        </div>
      );
    }
  
  export default SingleNote;