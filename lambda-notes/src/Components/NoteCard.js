import React from 'react';
import { Col, Row, Card, CardBody, Button } from 'reactstrap';

const NoteCard = ({ noteData }) => {
    console.log("STUFF", noteData.title)
    return (
        <div>
        
        <h2>{noteData.title}</h2>
        <p>{noteData.note}</p>
        
            </div>
    )
}
 
export default NoteCard;