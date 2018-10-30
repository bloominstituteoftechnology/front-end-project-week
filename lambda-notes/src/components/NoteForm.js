import React from 'react'

const NoteForm = props => {
    return (
        <div>
            <form
                onSubmit={() => {
                    props.addNote()
                    props.history.push('/')
                }}
            >
                <input type='title' name='title' onChange={props.handleChange} />
                <textarea name='textBody' wrap='soft' cols='80' rows='20' onChange={props.handleChange} />
                <input type='submit' value='add' />
                {
                    props.isEditing ? <button onClick={props.updateNote}>Update</button> :
                    null}
            </form>
        </div>
    )
}

export default NoteForm
