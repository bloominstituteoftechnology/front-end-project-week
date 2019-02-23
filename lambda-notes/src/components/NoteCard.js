import React from 'react';
import { ListGroup } from 'reactstrap';

const NoteCard = props => {

    return(
        <div className="note-card">

            <h2 className="note-title">
                {props.title}
            </h2>
            <div className="note-textBody">
                {props.textBody}
            </div>
            
            <ListGroup>
                {props.tags ? 
                    <div>{props.tags.map(tag => {
                        return (<div>
                            {tag}
                        </div>)    
                    })}
                </div>
                : null

            }
                
            </ListGroup>
            
        </div>
    )
        
}

export default NoteCard;

