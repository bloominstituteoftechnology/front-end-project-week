import React, { Component } from 'react';

export default class NewNote extends Component{
    constructor(){
        super();
    }

    
    render () {
        return(
            
            <div className='rightSide'>
                <p className='RS-title'>Your Notes:</p>
                <div className = 'edit-forms'>
                    <div className='edit-title'>
                    <t className='t'>Note Title</t>
                    </div>
                    <div className='edit-content'>
                    <t className='t'>Note Content</t>
                    </div>
                </div>
            </div>
        );
    }
}