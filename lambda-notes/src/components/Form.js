import React from 'react';

export default class Form extends React.Component {
    
    render(){
        return (
            <div className="form-body">
            <input id='title-input' onChange={this.props.inputHandler} name="title" type="text" placeholder='Note Title' />
            <textarea name="content" onChange={this.props.inputHandler} placeholder='Note Content' id='textarea'/>
            <div onClick={this.props.saveNote} className="button">Save</div>
            </div>
        )
    }
}