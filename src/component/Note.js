import React from 'react';
import {Link} from "react-router-dom";

const Note = ({_id, title, textBody, handleViewNote}) => {

  return (
    
  <li className='cardnote ' key ={_id} >

    <div className="cardnote-body">
      <h3 className="cardnote-title bb3">{title}</h3>
      <p className="cardnote-text" >{textBody}</p>
      
    </div>
    <div className="cardnote-btn">
      <Link to={`/Notes/${_id}`}  href="#" className="btn btnnote " >View more ...</Link>
      </div>
  </li>
   
  );
};



export default Note;

