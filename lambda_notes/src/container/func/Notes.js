import React from 'react';
import { Card, CardBody, CardTitle, } from 'reactstrap';

const Notes = (props) => {
    return(
        <div>
            testing
            <div>{props.NoteData.title} </div>
            <div>{props.NoteData.content} </div>
        </div>  
    )
         
}

export default Notes;