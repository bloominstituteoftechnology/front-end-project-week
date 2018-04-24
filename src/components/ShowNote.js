import React from 'react'; 
import LeftPanal from './LeftPanal';


const ShowNote = (props) => {

    return (
        <div className={props.c} >
        <div className={props.ic}>
            <div>{props.p.title}</div>
        </div>
            <div>{props.p.content}</div>
        </div>
    )
}

export default ShowNote;