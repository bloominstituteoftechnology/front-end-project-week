import React from 'react';
import { connect } from 'react-redux';

import '../App.css';

const NoteContainer = (props) => {
        return(
            <li className="note">
                <p>{props.note.title}</p>
                <hr/>
                <p>{props.note.content}</p>
            </li>
        );
};

export default connect(null, {})(NoteContainer);