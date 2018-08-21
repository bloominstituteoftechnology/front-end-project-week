import React from 'react';
import Note from './Note';

const List = (props) => {
    return (
        <div>
            {props.list.map(list => <Note key={list.id} data={list} />)}
        </div>
    );
}
 
export default List;