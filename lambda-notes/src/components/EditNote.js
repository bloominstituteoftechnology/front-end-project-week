import React, { Component } from 'react';

class EditNote extends Component {
    
    render() {
        let titleInput, textInput;
        return (
            <div className='col-9 right_side'>
                <div className='row title_bar'>
                    <div className='col-4 edit_title header_font' >
                        <h4>Edit Note:</h4>
                    </div>  
                </div>    
                <div className='row'>
                    <div className='col'>
                    <form className='new_note_form' onSubmit={(event) => {
                        event.preventDefault();
                        //edit note function here 
                        window.location.href='/';
                    }}>
                        <input className='new_note_title' ref={title => titleInput = title} placeholder='New Title' autoFocus />
                        
                        
                        <textarea cols='66' rows='18' className='new_note_text' ref={text => textInput = text} placeholder='New Text'></textarea>
                        <input className='save_button d-flex' type='submit' />
                        <br/>
                    </form>
                    </div>
                </div>
            </div>
        )
    }    
}

export default EditNote;