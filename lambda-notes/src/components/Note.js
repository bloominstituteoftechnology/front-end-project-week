import React from 'react'
import ReactMarkdown from 'react-markdown'

const Note = ({ note }) => {
    const input = note.textBody
    return (
        <div>
            <ReactMarkdown source={input} />
        </div>
    )
}

export default Note
