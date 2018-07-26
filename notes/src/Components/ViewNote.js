import React, {Component} from 'react';

const ViewNote = props => {
    return(
        <div className='Viewnote'>
            <h1>{props.location.state.title}
            {props.location.state.content} </h1>
            </div> 
    )
}





export default ViewNote;