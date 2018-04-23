import React from 'react';

const notes = [
    {
        id: 0,
        title: 'test',
        text: 'test again'
    },
];

export default () => {
    <ul>{notes.map(note => {
        <li key={note.id}>{note.title} <br />
        {note.text}</li>
       
    })}
     </ul>
} 