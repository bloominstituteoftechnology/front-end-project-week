import React from 'react';

export default props => {
    const { note } = props;

    return (
        <div>
            <b>{note.title}</b>,
            <span>{note.textBody}</span>
        </div>
    );
};