import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteCard extends Component {

    render() {
        console.log(this.props.notes);
        if(!this.props.notes) {
            return (
                <div className="card-container">
                    <h2 className="main-container-header">{this.props.text}</h2>
                    <h5>No notes found.</h5>
                </div>
            )
        }
        return (
            <div className="card-container">
                <h2 className="main-container-header">{this.props.text}</h2>
                <ul className="card-list">
                {this.props.notes.map(element =>{
                    return(
                        <li className="card" key={element._id + element.title}>
                            <Link 
                                to={{pathname:`/notes/${element._id}`, state: {element}}}>
                                {element.title}
                            </Link>
                            <hr/>
                            {element.body}
                        </li>

                    )
                })}  
                
                </ul>
            </div>
        );
    }
}

export default NoteCard;
