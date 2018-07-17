import React, { Component } from 'react';
import axios from 'axios';
import '../styles/ViewNote.css';


class ViewNote extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
    return (
            <div> 
            <div className="Viewnote">
            <h3>{this.props.title}</h3>
            <p>{this.props.body}</p>    
            </div>
            </div>
        )
    }
}


export default ViewNote;