import React, {Component} from 'react';
import Note from './Note';

export default class NotesList extends Component{
    constructor(props) {
        super(props);
        // this.state = {
            
        // };
    }
    render() {
        return(
        <div>
            {console.log(this.props)}
        {this.props.notes.map(note => {
            return <Note note={note}/>;
        })}
        </div>
        )
    };
};