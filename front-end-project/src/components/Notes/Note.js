import React from 'react'

const Note = props => {
    const {title, content} = props.note
    return(
        <div>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    )
}

export default Note