import React from 'react';


const Notes = props => {
    console.log(props)
    return (
            <div>
                <h3>{props.title}</h3>
                <p>{props.textBody}</p>
            </div>

    )
    
}

export default Notes;