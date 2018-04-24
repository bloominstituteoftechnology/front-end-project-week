import React from 'react'; 
import LeftPanal from './LeftPanal';


const ShowNote = (props) => {

    return (
        <div className={props.c} >
            <div>{console.log('here',props.p, props.c)}</div>
            <div>{props.p.title}</div>
            <div>{props.p.content}</div>
        </div>
    )
}

export default ShowNote;