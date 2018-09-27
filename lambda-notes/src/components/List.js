import React, { Component } from 'react';
import Note from './Note';
import { Link } from 'react-router-dom';


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div>
                <h3>Your Notes:</h3>
                {this.props.notes.map((note, index) => 
                    <Link to={`/note/${note.id}`}> <Note key={index} data={note} /> </Link>
                )}                   
            </div>
        );
    }
}

export default List;