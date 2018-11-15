import React from 'react';
import {Link} from 'react-router-dom';

class Note extends React.Component{
    render(){
        return(
            <div className = 'note-container'>
                
                    <h2>{this.props.note.title}</h2>
                  
                <p>{this.props.note.textBody}</p>
            </div>
        )
    }    
}

export default Note;