import React from 'react';

function NoteForm() {
    return (
        <div className="noteform-div">
            <form>
                <input type="text" placeholder="title" />

                <textarea>
                    Your notes here.
                </textarea>
            </form>
        </div>
    )
}

export default NoteForm;