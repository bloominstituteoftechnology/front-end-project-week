import React from 'react';
import './ListView.css';
import { Link } from 'react-router-dom';

const ListView = (props) => {
    return (
        <div className='list-view'>
            <h3>Your Notes:</h3>
            <div className='tiles'>
                {props.notes.map(note => {
                    return (
                        <div className='tile'>
                            <Link to={`/view/${note._id}`} style={{textDecoration: 'none', color: '#4A4A4A'}}>
                                <h4>{note.title}</h4>
                                <p>{note.textBody}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListView