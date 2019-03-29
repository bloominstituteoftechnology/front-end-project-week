import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state ={
            fetching:[],
        }
    }
    render() {
        console.log(this.props.note);
        return (
            <div>
                <input type="text" name= "note-name" className="input-text" value={this.props.note.note_title}/>
                <input type="text" name= "note-content" className="input-text-area" value={this.props.note.note_body}/>
                <div className="button save-button">Save</div>
            </div>
        );
    }
}

export default Form;
