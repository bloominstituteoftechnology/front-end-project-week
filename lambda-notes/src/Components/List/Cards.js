import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import NoteCard from '../List/Card';

const Cards = (props) =>{
    console.log("CARDPROPS", props);
    return(
        <div className = "card-container">
    {props.notes.map(note, () =>{
        // const { note_title, note_body, id } = note;
        return(
            <NoteCard key={note.id} notes={note} />
        )})}
        </div>
    )
}
export default Cards;

    