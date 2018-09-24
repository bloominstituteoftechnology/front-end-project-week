import React from 'react';
import  {connect} from 'react-redux';
import {fetchNotes} from '../../actions';
import SideBar from "../Sidebar/sidebar";
import "./notelist.css";
import Note from "./note";
import { render } from 'react-dom';

class NoteList extends Component {
    //this.props.fetchNotes();


render(){
    return(
        <div className="page-container">
        <SideBar />
        <div className="section-container">
            <h1 className="notes-title">Your Notes: </h1>
            <div className="note-container">
                {console.log(this.props)}
                {this.props.notes.map(note=> <Note key={note._id} note={note}/>)}
            </div>
        </div>
        </div>
    )
}
}

const mapStateToProps = state => {
    return{
        notes: state.notes
    }
}