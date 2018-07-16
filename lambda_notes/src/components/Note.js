import React from 'react';

import PropTypes from 'prop-types';

const Note = props => {
    return (
        <div>
            <h1>{props.note.title}</h1>
            <p>{props.note.textBody}</p>
        </div>
    );
}

Note.propTypes = PropTypes.shape({
    "tags": PropTypes.string.isRequired,
    "_id": PropTypes.string.isRequired,
    "title": PropTypes.string.isRequired,
    "textBody": PropTypes.string.isRequired,
    "__v": PropTypes.number.isRequired,
}).isRequired

export default Note;