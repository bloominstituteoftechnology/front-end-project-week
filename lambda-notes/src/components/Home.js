import React from 'react';
import {connect} from 'react-redux';
import '../style/list.css';


const ListItem = (props) => {
    return (
        <div key = {props.index} className = "List-item">
            <h3> {props.title}</h3>
            <p> {props.content}</p>
        </div>
    )
}
 const List = (props) => {
    return (
        <div className = "List-page">
            <h2> Your Notes: </h2>
        <div className = "List">
        {
            props.notes.map((note,index) => {
                return (
                    <ListItem  key = {index} title = {note.title} content = {note.content} />
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