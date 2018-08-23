import React, { Component } from 'react';
import './index.css'
import Note from '../Note/Note';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { getNote } from '../../actions/noteActions';



class ListView extends Component {
       
    componentDidMount() {
        this.props.getNote()
    }
    render() {
        return (
            <div className='main-container'>
                <div className='noteList-container'>
                    <div className="note-header"><h2>Your Notes:</h2></div>
                    <div className="noteList">
                        {this.props.notes.map((note , index)=> <Link to={`/note/${note.id}`} style={{ textDecoration : "none" }}><Note   tittle = {note.title} body={note.body} key={note.id} /></Link>)}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToprops = state => ({
    notes : state.notes
  })
  
  export default connect(mapStateToprops,{ getNote })(ListView);