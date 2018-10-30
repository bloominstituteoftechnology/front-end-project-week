import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Note from './Note';

class ListView extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='list-container'>
                {props.list.map(note => {
                    return (
                        <div className='note-card'>
                        <Route
                            path="/Note"
                            key={note._id}
                            render={props => {
                                return <Note {...props} list={this.state.note} />
                            }}
                        />
                        <Link to={`/Note/${note.id}`}></Link>
                        </div>
                        )
                    })}
            </div>   
        )
    };
}
export default ListView;


//click on card routes to note

//if wrap Note with Link then need key in link? 

//why underscore id? 

 // <Link to={`/Note/${note.id}`} >
                        //     <Note note={note} key={note._id} /> 
                        // </Link>
