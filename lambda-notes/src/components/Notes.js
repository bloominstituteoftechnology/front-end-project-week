import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { getNotes } from '../actions'

class Notes extends Component {
    render() {
        return (
            <div>
                <h1> My Notes </h1>
                {console.log('props', this.props)}
                    {!this.props.gettingNotes ?
                        <h2> loading notes</h2>: null}
                    <ul>
                        {this.props.notes.map((note) =>{
                            return(
                            <li key={note.id}>
                                <h3>{note.title} </h3>
                            </li>
                        )})}
                    </ul>
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