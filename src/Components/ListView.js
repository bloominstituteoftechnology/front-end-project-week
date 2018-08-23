import React from 'react';
import { Link } from 'react-router-dom';

const ListView = (props) => {
    return (
        <div className='list-view'>
            <div className='list-header'>
                <h1>Your Notes:</h1>
                <div>
                    <div onClick={props.sortAz} className='sort-btn'>A-Z</div>
                    <div onClick={props.sortZa} className='sort-btn'>Z-A</div>
                    <input name='search' onChange={props.handleSearch} value={props.searchVal} placeholder='Search...' />
                </div>    
            </div>
            <ul className='note-list'>
                {props.notes.map(note => {
                    return (
                        <Link to={`/view/${note.id}`} key={Math.random()} className='note'>
                            <h1>{note.title.substring(0, 20)}</h1>
                            <hr />
                            <p>{note.content.substring(0, 150)}</p>
                        </Link>    
                    )
                })}
            </ul>
        </div>
    );
}
 
export default ListView;