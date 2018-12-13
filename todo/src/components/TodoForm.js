import React from 'react';

const TodoForm = (props) => {
    return (
        <form>
            <input value={props.input} onChange={props.handleInput} />
            <button onClick={props.handleSubmit}>Add note</button>
            <button>Clear</button>
        </form>
    )
}

export default TodoForm