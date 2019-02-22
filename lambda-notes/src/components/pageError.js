import React from 'react';
import error from '../404.jpeg'
const pageError = () => {
    return(
        <>
            <h2 className="text-center note-title">Note? What note?...</h2>
            <img className="img-responsive" src={error}/>
        </>
    )
}

export default pageError;
