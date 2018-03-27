import React from 'react';
//import PropTypes from 'prop-types';

const Note = props => {
    return (
        <div>
            <h5>{props.location.state.currentNote.title}</h5>
            <h5>{props.location.state.currentNote.text}</h5>
        </div>
    );
};

// Note.propTypes = {
    
// };

export default Note;
