import React from 'react';
import Note from './Note';

const List = (props) => {
    return (
        <div>
            {props.list.map((list, index) => <Note key={index} data={list} />)}
        </div>
    );
}
 
export default List;