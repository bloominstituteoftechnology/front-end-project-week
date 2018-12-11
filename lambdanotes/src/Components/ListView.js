import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ListView.css';

class ListView extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='listview-container'>
                <h1>Your Notes:</h1> 
                <div className='list-container'>
                {this.props.list.map(note => {
                    return (
                        <div className='note-card' key={note.id}>
                            <Link to={`/Note/${note.id}`}>
                                <h2>{note.title}</h2>
                                <p>{note.textBody}</p> 
                            </Link>   
                        </div>
                        )
                    })}
                </div>
            </div>   
        )
    };
}
export default ListView;


