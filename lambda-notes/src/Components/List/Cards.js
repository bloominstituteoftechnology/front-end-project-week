import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = (props)=>{
    
    return(
        <div className = "card-container">
    {props.notes.dummydata.map(function(note){
        const { note_title, note_body, id } = note;
        return(
            <Card note = {note} key = {id} className = "card">
                <CardTitle cardTitle = {note_title} className = "card-title">
                <Link to = {`/list/${id}`}> {note_title}</Link></CardTitle>
                <CardText cardText = {note_body} className = "card-body">{note_body}</CardText>
            </Card>
        )})}
        </div>
    )
}
export default Cards;

    