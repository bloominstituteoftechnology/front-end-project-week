import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = (props)=>{

    return(
        <div className = "card-container">
    {props.notes.dummydata.map(function(note){
        return(
            <Card note = {note} className = "card">
                <CardTitle cardTitle = {note.note_title} className = "card-title">
                <Link to = '/list/number'> {note.note_title}</Link></CardTitle>
                <CardText cardText = {note.note_body} className = "card-body">{note.note_body}</CardText>
            </Card>
        )})}
        </div>
    )
}
export default Cards;

    