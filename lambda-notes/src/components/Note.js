import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { getNote } from '../actions'

class Note extends Component {
    render() {
        if(!this.props.note) {
            console.log(this.props)
            return <h2> loading note </h2>
        } else {
            return (
                <div>
                    <h1> My Note </h1>
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
    }
    componentDidMount() {
        const id = (this.props.match.params.id)
        this.props.getNote(id);
    }
}
    const mapStateToProps = (state) => {
      console.log('state note', state)
        return {
            note:state.note,
        }
    }
    
  export default connect(mapStateToProps, { getNote })(Note);
