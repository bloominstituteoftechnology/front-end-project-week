import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { getNote } from '../actions'

class Note extends Component {
    render() {
        return (
            <div>
              
                <h1> My Notes </h1>
                {console.log('props note', this.props.note)}
                    {!this.props.note ?
                        <h2> loading notes</h2>: null}
                    <ul>
                        {this.props.note.map((note) =>{
                            return(
                            <li key={note.id}>
                            {console.log(note)}
                            </li>
                        )})}
                    </ul>
            </div>
      );
    }
    componentDidMount(id) {
      // const id = this.props.match.params.id;
      console.log(this.props.match.params.id)
      this.props.getNote(id);
    }
}
    
    const mapStateToProps = (state) => {
      console.log('state note', state)
        return {
            notes:state.note
        }
    }
    
  export default connect(mapStateToProps, {getNote})(Note);
