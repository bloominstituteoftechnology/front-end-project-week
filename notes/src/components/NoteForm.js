import React, { useState } from 'react';

const useInputValue = (initialValue) => {
    const [value,  setValue] = useState(initialValue);
    return {
        value,
        onChange: e => setValue(e.target.value)
    }
}

const NoteForm = (props) => {
    const title = useInputValue('');
    const body = useInputValue('');

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                props.onSubmit(title.value, body.value, props.history);
            }}
        >
            <input {...title} required/>
            <input {...body} required/>
            <button type='submit'>Add</button>
        </form>
    );
}

export default NoteForm;