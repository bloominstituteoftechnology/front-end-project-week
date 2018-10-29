import React from 'react';

let Form = props => {
    return (
        <div className='container'>
            <h1>Add Item:</h1>
            <form onSubmit={props.submitHandler}>
                <input type='text' name='title' placeholder='Note title...' value={props.value} onChange={props.changeHandler}/>
                <input type='textarea' name='body' placeholder='Note body...' value={props.value} onChange={props.changeHandler}/>
                <input type='submit' />
            </form>
        </div>
    )
}

export default Form;