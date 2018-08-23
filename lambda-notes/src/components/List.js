import React from 'react';
import Note from './Note';
import { Link } from 'react-router-dom';

const List = (props) => {

    return (
        <div>
            {props.list.map((note, index) => 
                <Link to={`/Note/${note.id}`}> <Note key={index} data={note} /> </Link>
            )}
        </div>
    );
}
 
export default List;