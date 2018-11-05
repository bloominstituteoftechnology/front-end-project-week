import React from 'react';

const Note = props => {
    return (
        <div className="Note">
            {props.tags}
            {props.title}
            {props.textbody}
    );
};

Note.defaultProps = {
    tags: '',
    title: '',
    textbody: '',
};

export default Note;