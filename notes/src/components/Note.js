import React from 'react';

import Note from '../Styles/Note';

export default (props) => (
    <Note>
        <h3>{props.title}</h3>
        <hr></hr>
        <p>{props.body}</p>
    </Note>
);