import React from 'react'; 
import {Link} from 'react-router-dom';

import Delete from './Delete';
// import dummyData from '../dummydata';

const NoteView = (props) => {
    console.log('PROPSMATCH', props.match)
    return(
        <div className="ViewForm">
            <div className="ButtonContainer">
                <Link to={'/EditCard'}><h6 className="Edit"> Edit </h6></Link>
                <Delete/>
            </div>
            <h4 className="NoteView">Note View </h4>
            <p className="ViewBody"> {props.match.params.id} </p>
        </div>
    )
}
export default NoteView;