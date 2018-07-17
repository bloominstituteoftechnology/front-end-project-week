import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ViewNote.css';


class ViewNote extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
    return (
            <div>
                {/* <Link to={`editNote/${this.props.match.params.id}`}>edit</Link> */}
                {/* <Link>delete</Link> */}
            <div className="Viewnote">
            <h3>{this.props.title}</h3>
            <p>{this.props.body}</p>    
            </div>
            </div>
        )
    }
}


export default ViewNote;