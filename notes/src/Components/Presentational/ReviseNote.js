import React from 'react';

export const ReviseNote = props => {
    console.log(props)

    return (
    <form>
        <div className="form-container">
            <label>Title</label>
            <input name="title" onChange={e => props.handleInput(e)}/>
        </div>

        <div className="form-container">
            <label>Message</label>
            <textarea name="textBody" onChange={e => props.handleInput(e)}>
            </textarea>
        </div>

        <div className="button revise" onClick={e => {props.reviseNote(props.match.params.id, props.note); e.currentTarget.parentElement.reset(); props.history.push('/notes')}}>Update Note</div>
    </form>
    );
}