import React from "react";
import ReactMarkdown from 'react-markdown';

const Note = ({note}) => {
    const { title, textBody } = note
    let truncTitle = '';
    let truncBody = '';
    title.length > 15 ? truncTitle = title.slice(0, 15).concat('...') : truncTitle = title
    textBody.length > 170 ? truncBody = textBody.slice(0, 170).concat('...') : truncBody = textBody

    return (
        <div lang='en' className="note-card">
            <div className="note-title">{truncTitle}</div>
            <ReactMarkdown className="note-body" source={truncBody} />
        </div>
    )
}
export default Note;