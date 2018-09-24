import React from 'react';

export const AssembleNote = props => {
    return (
        <form>
            <div className="form-container">
                <label>Title</label>
                <input name="title"  onChange={e => props.handleInput(e, props.formName)}/>
            </div>

            <div className="form-container">
                <label>Message</label>
                <textarea name="textBody"  onChange={e => props.handleInput(e, props.formName)}>
                </textarea>
            </div>

            <div className="button assemble" onClick={(e) => {props.assembleNote(props.note); e.currentTarget.parentElement.reset()}}>Create Note</div>
        </form>
    )
}