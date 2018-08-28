import React from 'react';

const Listview = (props) => {
    return(
        <div> 
            {props.noteList.map((notes, i) => {
                return (
                    <div key={i}>
                    <div>{notes.tags}</div>
                    <div>{notes.title}</div>
                    <div>{notes.textBody}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Listview;