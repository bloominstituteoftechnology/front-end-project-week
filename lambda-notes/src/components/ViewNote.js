import React from 'react'

const ViewNote = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.textBody}</p>
        </div>
    )
}

export default ViewNote
