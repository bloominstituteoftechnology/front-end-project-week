import React, { useState } from 'react';

const useInputValue = (initialValue) => {
    const [value,  setValue] = useState(initialValue);
    return {
        value,
        onChange: e => setValue(e.target.value)
    }
}

const NoteForm = ({onSubmit, history, id=false}) => {
    const title = useInputValue('');
    const body = useInputValue('');

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                if(id) {
                    onSubmit(title.value, body.value, id, history);
                    return;
                }
                onSubmit(title.value, body.value, history);
            }}
        >
            <input {...title} required/>
            <input {...body} required/>
            <button type='submit'>Add</button>
        </form>
    );
}

export default NoteForm;