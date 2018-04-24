import React from 'react';
import './inputForm.css';

const InputForm = (props) => {
    return (
    <div className='InputForm'>
        <div className='InputForm__Header'> props.header</div>
        <input className='Input' type='text' placeholder='New Note Title'></input>
        <input className='Input InputBody' type='text' placeholder='New Note Body'></input>
        <div className='save'> Save </div>
    </div> 
    )}
export default InputForm;