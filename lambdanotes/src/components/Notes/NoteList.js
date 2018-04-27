import React from 'react'
import Note from './Note'
import { Link } from "react-router-dom";
class NoteList extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='col-9 right__side'>
                <div className="row">
                    <h4>Your Notes:</h4>
                </div>
                <div className="row">
                    {this.props.notes.map((note) => {
                        return (
                            <div className="col-4" key={note.id + note.title}>
                                <Link to={`/notedetail/${note.id}`}>
                                    <Note note={note} key={note.id} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default NoteList;