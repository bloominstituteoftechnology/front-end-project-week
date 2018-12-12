import React, {Component} from "react";
import Note from "./Note"
import './index.css';
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {getNotes} from "./Actions";

class NoteListTest extends Component{

    componentDidMount(){
        this.props.getNotes();
    }

    render() {
        return(
            <>
                <header className="header">Your Notes:</header>
                <div className="notes-list">
                {
                this.props.notes.map( note => (
                        <Link to={`/note/${note._id}`}key={note._id}>
                            <Note  name={note._id} title={note.title} textBody={note.textBody} _id={note._id}/> 
                        </Link>
                    )
                )
                }
            </div>
          </>
        );
    }
}

const mapStateToProps = state => {
    return({
        notes:state.notes
    })
}

export default connect(mapStateToProps,{getNotes})(NoteListTest);