import React from 'react';
import OneNote from './OneNote';
import PropTypes from 'prop-types';

export default class NoteList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.notes.map((note,index) =>{
                    return(
                        <li key={index}>
                            <OneNote title={note.title} content={note.content} />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

NoteList.PropTypes = {
    notes: PropTypes.arrayOf({
        note: PropTypes.shape({
            title: PropTypes.string,
            content: PropTypes.string
        })
    }
    )
}