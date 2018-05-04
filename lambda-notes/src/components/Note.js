import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { getNote } from '../actions'

class Note extends Component {

    render() {
        return (
            <div>
                <h1> My Note </h1>
                {console.log('props note', this.props.note)}
                    {/* {!this.props.note ?
                        <h2> loading notes</h2>: null}
                    <ul>
                        {this.props.note.map((note) =>{
                            return(
                            <li key={note.id}>
                            {console.log(note)}
                            </li>
                        )})}
                    </ul> */}
            </div>
      );
    }
    componentDidMount() {
      this.props.getNote();
    }
}
    const mapStateToProps = (state) => {
      console.log('state note', state)
        return {
            note:state.note
        }
    }
    
  export default connect(mapStateToProps, {getNote})(Note);
