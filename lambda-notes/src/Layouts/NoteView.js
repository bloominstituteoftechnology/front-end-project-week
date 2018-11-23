import React from 'react';
import noteReducer from '../reducers/noteReducer';

function NoteView (props) {

    const id = props.match.params.id;
    
    return (
        <React.Fragment>
            <div className="container-fluid">
            <h1> Note View</h1>
      
            </div>
        </React.Fragment>
    );
}

export default NoteView;