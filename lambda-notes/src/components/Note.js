import React from 'react';
import '../components/Note.css';
import { Link } from 'react-router-dom'

export const Note = (props) => {
        return(
              <div className="note">
                <h4>
                  <Link 
                    style={{textDecoration: "none", color: "black"}} 
                    to={`/NoteView/${props.id}`}>
                    {props.title}
                  </Link>
                  <br/>
                  <hr/> 
                  <br/> 
                </h4> 
                <p>{props.textBody}</p> 
                <div className="image"> 
                  <img alt='single-note' src={props.image} />
                </div> 
              </div> 
        )
}