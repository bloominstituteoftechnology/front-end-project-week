import React, { Fragment } from 'react';


export const Note = props => {
    return (
        <Fragment>
            <div className="note-container">
                <h3>{props.note.title}</h3>
                <div 
                style={{fontSize:!props.match.params.id ? props.fontSizeTest(props.note.textBody.length) : '16px'}} 
                dangerouslySetInnerHTML={{__html: props.noteMarkdownConverter.makeHtml(props.note.textBody + " ")}}></div>
            </div>
        </Fragment>
    )
}