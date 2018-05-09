import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { getNotes } from '../actions'
import '../css/Notes.css';


class Notes extends Component {
    render() {
        return (
            <div className="notes">
                    {!this.props.notes ?
                        <h2> loading notes</h2>: null}
                    <div className='notes-container'>
                        {this.props.notes.map((note) =>{
                            return(
                            <div className='notes-list' key={note.id}>
                                <h3><Link to={`/notes/${note.id}`}>{note.title}</Link></h3>
                                <p> { note.body } </p>
                            </div>
                        )})}
                        </div>
            </div>
      );
    }
    componentDidMount() {
        this.props.getNotes();
    }
}
    
    const mapStateToProps = (state) => {
        return {
            notes:state.notes
        }
    }
    
  export default connect(mapStateToProps, {getNotes})(Notes);

