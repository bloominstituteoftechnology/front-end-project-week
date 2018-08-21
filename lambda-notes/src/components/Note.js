import React from 'react';

const Note = props => {
    return <div>{props.data.title}<br></br>{props.data.content}</div>;
};

export default Note;