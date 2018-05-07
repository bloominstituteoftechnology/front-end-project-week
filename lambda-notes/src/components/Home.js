import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import '../style/list.css';


const ListItem = (props) => {
    return (
        <Link to = {`/note/${props.id}`}>
        <div className = "List-item">
            <h3> {props.title}</h3>
            <p> {props.content}</p>
        </div>
        </Link>
    )
}
 const List = (props) => {
    return (
        <div className = "List-page">
            <h2> Your Notes: </h2>
        <div className = "List">
        {
            props.notes.map(note => {
                return (
                    <ListItem  key = {note.id} id = {note.id} title = {note.title} content = {note.content} />
                )
            })
        }
        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        notes:state.notes
    }
}

export default connect(mapStateToProps,null)(List);