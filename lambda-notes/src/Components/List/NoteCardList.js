import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NoteCardList.css';


const mapStateToProps = (state) => {
    return {notes: state.notes};
};

const NoteCardList = (props)=>{
    console.log("NOTES",props.notes[0].note);
    return(
        <div className = "note-wrapper">
        <h1 className = "header">Your Notes:</h1>
        <ul className = "card-container">
            
            {props.notes[0].note.map(el => {
                return(
                 <Card  key={el.id} className = "card">
                 <CardTitle key={el.note_title} className = "card-title">
                    <Link to = '/list/number'>{el.note_title}</Link></CardTitle>
                    <hr />
                    <CardText key={el.note_body} className = "card-body">{el.note_body}</CardText>
                 </Card>
                )
            })}
        </ul>
        </div>
    );  
}
export default connect(mapStateToProps)(NoteCardList);

    