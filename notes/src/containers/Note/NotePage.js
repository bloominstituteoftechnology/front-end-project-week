import React from 'react'



const NotePage = props => {
    if (props.notes.length) {
        let note = props.notes.find(
            note => `${note.id}` === props.match.params.id
        )

        return (
            <div>

                <h1>{note.title}</h1>
                <p>{note.textBody}</p>
            </div>
        )
    }
}


export default NotePage