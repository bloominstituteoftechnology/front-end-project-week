import React from 'react';
import {Route} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';


// React wasn't happy with me wrapping markdown inside of a giant Link component, so I found a way around it using Route.
// This is a simple display of the note title and body copy. It also has logic to prettify the preview overflow.

const Note = props => (
    <Route render={({history}) => (
        <div className='note' onClick={() => { history.push(`/notes/${props.note.id}`) }}>
            <h2>{props.note.title.length > 17 ? props.note.title.substring(0,16) + "..." : props.note.title}</h2>
            <ReactMarkdown source={props.note.textBody.length > 200 ? props.note.textBody.substring(0,200) + "..." : props.note.textBody} />
            {/* {props.note.tags.map(tag => <p>{tag}</p>)} */}
        </div>
    )} />
  )

export default Note;