import React from 'react';

const LambdaForm = props => {
    <form>
        <h1>Create New Note:</h1>
        <input type="text" name="title" placeholder="Note Title" onChange={props.handleChange} value={props.title}/>
        <textarea type="text" name="body" placeholder="Note Content" onChange={props.handleChange} value={props.body}/>
        <button onClick={props.handleAddnote}>Save</button>
        </form>
}

export default LambdaForm;