import React from 'react';

export const Header = props => {
    
    const displayCreateNoteForm = e => {
        e.currentTarget.parentElement.parentElement.classList.add('display');
    }

    const hideCreateNoteForm = e => {
        e.currentTarget.parentElement.parentElement.parentElement.classList.remove('display');
        e.currentTarget.parentElement.parentElement.reset();
        e.currentTarget.parentElement.parentElement.querySelector('textarea').style.height = "25px";
    }
    
    return (
        <section className="new-note" >
            <form>
                <input name="title" placeholder="Title" onChange={e => props.handleInput(e)}/>
                <textarea name="textBody" onClick={displayCreateNoteForm} onFocus={displayCreateNoteForm} onChange={e => props.handleInput(e)} placeholder="Take a note..."></textarea>
                <div className="buttons">
                    <div className="button create" onClick={(e) => {props.assembleNote(props.note); hideCreateNoteForm(e)}}>Create Note</div> 
                    <div className="button close" onClick={hideCreateNoteForm}>Close</div>
                </div>
            </form>
        </section>
    )
}