import React from 'react';
import '../components/Note.css';

export const Note = (props) => {
        return(
              <div className="note">
                <h4>{props.note.title}
                  <br/>
                  <hr/> 
                  <br/> 
                </h4> 
                <p>{props.note.textBody}</p> 
              </div> 
        )
}