import React from 'react';

const Edit = props => {
    return (
        <div>
            <h3>Edit Note:</h3>
            <form>
                <input placeholder="Note Title" onChange={props.handleTaskChange} value={props.title} name="title"/>
                <br></br>
                <input placeholder="Note Content" onChange={props.handleTaskChange} value={props.content} name="content"/>
                <br></br>
                <br></br>
                <button className="create-button" onClick={props.updateNoteHandler}>Update</button>
            </form>
        </div>
    );
}

export default Edit;