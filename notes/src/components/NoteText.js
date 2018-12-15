import React from 'react'
import Markdown from 'markdown-to-jsx';

const NoteText = props => {
    return (
        <Markdown>{props.textBody}</Markdown>
    )
}

export default NoteText;