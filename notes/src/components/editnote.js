import React, { Component } from 'react';

export default class EditNote extends Component {
    render() {
        return (
            <div className="text-white">
                <input id="input1" type="text"></input>
            <div className="text-white">
                <textarea name="textarea"
                    rows="10" cols="60">Write something here</textarea> 
                </div>
            </div>    
        )
    }
}