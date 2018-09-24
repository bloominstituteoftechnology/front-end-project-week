import React from 'react';

export const ReviseNote = props => {
    return (
    <form>
    <div className="form-container">
        <label>Title</label>
        <input name="title"  onChange={e => props.handleInput(e)}/>
    </div>

    <div className="form-container">
        <label>Message</label>
        <textarea name="textBody"  onChange={e => props.handleInput(e)}>
        </textarea>
    </div>

    <div className="button assemble">Update Note</div>
</form>
    );
}