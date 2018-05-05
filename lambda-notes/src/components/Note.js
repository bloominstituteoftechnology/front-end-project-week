import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { getNote } from '../actions'

class Note extends Component {
    render() {
            return (
                <div>
                    <h1> My Note </h1>
                        {!this.props.note ?
                            <h2> loading notes</h2>: null}
                        <ul>
                            <li key={this.props.note.id}>
                                <h2> {this.props.note.title} </h2>
                                <p> {this.props.note.body} </p>
                            </li>
                        </ul>
                </div>
            );
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
