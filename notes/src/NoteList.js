import React, {Component} from "react";
import Note from "./Note"
import './index.css';
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {getNotes} from "./Actions";

class NoteListTest extends Component{

    componentDidMount(){
        if(this.props.waiting===false){
            this.props.getNotes();
        }
        
    }

    render() {
        if(this.props.notes.length===0){
            return(
                <p>Loading...</p>
            )
        } else{
            return(
                <>
                    <header className="header">Your Notes:</header>
                    <div className="notes-list">
                    {
                    this.props.notes.map( note => (
                            <Link to={`/note/${note._id}`}key={note._id}>
                                <Note  name={note._id} title={note.title} textBody={note.textBody} _id={note._id} /> 
                            </Link>
                        )
                    )
                    }
                </div>
              </>
            );
        }
    }
}

const mapStateToProps = state => {
    return({
        notes:state.notes,
        waiting:state.waiting
    })
}

export default connect(mapStateToProps,{getNotes})(NoteListTest);
