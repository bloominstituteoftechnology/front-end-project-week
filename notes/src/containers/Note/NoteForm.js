import React from 'react'




const NoteForm = props => {
    const createNote = e => {
        e.preventDefault()
    }
    return (
        <form>
            <h1>Create New Note</h1>
            {/* Todo: Add OnChange={props.changeHandler} */}
            <input type="text" name='title' value={props.title} placeholder='Title' />
            <textarea name="textBody" value={props.textBody} id="props.id" cols="60" rows="30" placeholder='Note Content' />
            <button onClick={createNote}>Save</button>
        </form>
    )
}


export default NoteForm