import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { notes } from '../notes';

const SingleNote = ( props ) => {
    // console.log(props)
    console.log('click')
        return(
            <div className='page-container'>
            
            {/* {this.props.notes.map(note => { */}
                <div>
                <div>{props.note.title}</div>
                <div>{props.note.text}</div>
                <Link to={`/edit/${props.note.id}`}>Edit Note</Link>
                </div>
             {/* })}  */}
                </div>
        )
    
}

export default SingleNote;
