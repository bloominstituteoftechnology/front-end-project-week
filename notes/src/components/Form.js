import React from 'react';

let Form = props => {
    return (
        <form onSubmit={props.submitHandler}>
            <input name='title' placeholder='Note title...' value={props.value} onChange={props.changeHandler}/>
            <input name='body' placeholder='Note body...' value={props.value} onChange={props.changeHandler}/>
            <input type='submit' />
        </form>
    )
}

export default Form;