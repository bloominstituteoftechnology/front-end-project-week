import React, {Component} from 'react';


export default class Notes extends Component{
    constructor(props){
        super(props);
    }
   
    render(){
        return <li key={this.props.note.id} className="note">
            <div className="note-name">{this.props.note.title}</div>
            <div className="note-content">{this.props.note.content}</div>
            </li>;
    }
}