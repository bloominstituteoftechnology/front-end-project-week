import React from 'react';

function NoteForm(props) {
    return (
        <div className="noteform-div">
            <form>
                <input type="text" placeholder="title" name="inputTitle" onChange={props.inputText}/>
                <input type="text" placeholder="notes here" name="inputTextBody" onChange={props.inputText}/>
            </form>
        </div>
    )
}

export default NoteForm;