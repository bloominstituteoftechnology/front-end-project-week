import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, FormText } from 'reactstrap';


 const Inputs = props => {
    
        return(
            <div onSubmit={props.handleSubmit}
                className='input d-flex flex-column' >
                <h4 className='New_note_header text-left pl-3 pt-5 '> Create New Note: </h4>
                    
                <input className='input_title p-1 ml-3 mt-3 border'
                    type='text'
                    placeholder='Note Title'
                    name='Title'
                    onChange={props.handleChange} 
                />
                 <input className='input_content p-1 ml-3 mt-2 mr-5 border'
                    type='text'
                    placeholder='New Content'
                    name='Content'
                    onChange={props.handleChange} 
                />

                <button onClick={props.handleSubmit} 
                    type='button' 
                    className=' btn btn-sm ml-3 mt-2 save_button'> Save
                </button>
            </div>
        );
    }


export default Inputs;