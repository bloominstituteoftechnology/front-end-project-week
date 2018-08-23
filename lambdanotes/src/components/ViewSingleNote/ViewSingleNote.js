import React from 'react';
import {Link} from 'react-router-dom';
import './ViewSingleNote.css';

const ViewSingleNote= props => {
    // console.log(props);
    return (
        <div className='single-note-container'>
            <div className='spans'>
                <Link style={{textDecoration:'none', color:'black', marginTop:'30px'}} 
                to={{pathname:'/edit',
                    state:props.location.state
                }}>
                    <span>edit</span>
                </Link>
                <Link style={{ textDecoration: 'none', color:'black', marginTop:'30px' }} to= '/'>
                    <span onClick={() => props.deleteNote(props.location.state.id)} >delete</span>
                </Link>
            </div>
            <div className='single-note'>
                <h3 className='h3'>{props.location.state.title}</h3>
                <p className='p'>{props.location.state.content}</p>
            </div>
        </div>
    );
};

export default ViewSingleNote;