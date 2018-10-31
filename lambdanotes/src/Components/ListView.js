import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ListView extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='list-container'>
                {this.props.list.map(note => {
                    return (
                        <div className='note-card' key={note._id}>
                            <Link to={`/Note/${note._id}`}>
                                <h1>{note.title}</h1>
                                <p>{note.textBody}</p> 
                            </Link>   
                        </div>
                        )
                    })}
            </div>   
        )
    };
}
export default ListView;


