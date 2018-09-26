import React from 'react';
import { Link } from "react-router-dom";
import './SingleNote.css';


const SingleNote = (props) => {
    // console.log(props.notes);
    return (
        <div className="cards-container">
        <div className="links">
        <Link to ="/editcard">
        <button className="edit">
        <span>edit</span>
        </button>
        </Link>
        <Link to ="/deletecard">
        <button className="delete">
        <span>delete</span>
        </button>
        </Link>
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