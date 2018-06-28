import React from 'react';
import ViewNote from './viewnote';


const MyFilteredNote = (props) => {

return (
    <div>

    <h6>{props.todos.title}</h6>
    <p className="display-content">{props.todos.content}</p>

</div>
)}

export default MyFilteredNote;