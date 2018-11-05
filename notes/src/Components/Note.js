import React from 'react';

const Note = props => {
    return (
        <div className="Note">
            {props.title}
            {props.textBody}
        </div>
    );
};

Note.defaultProps = {
    tags: '',
    title: '',
    textBody: '',
};

export default Note;