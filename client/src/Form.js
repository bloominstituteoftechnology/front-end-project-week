import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state ={
            title: '',
            body: ''
        }
    }

    render() {
        return (
            <div className="edit-create-form">
                <input type="text" name= "name" className="input-text" value={this.props.title}/>
                <textarea type="text" name= "body" className="input-text-area" value={this.props.body}/>
                <div className="button save-button">Save</div>
            </div>
        );
    }
}

export default Form;
