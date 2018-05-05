import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { getNote } from '../actions';

class Note extends Component {
    render() {
            return (
                <div>
                    <h1> My Note </h1>
                        {!this.props.note ?
                            <h2> loading notes</h2>: null}
                                <h2> {this.props.note.title} </h2>
                                <p> {this.props.note.body} </p>
                                <Button><Link to={`/notes/update/${this.props.note.id}`}> Update Note </Link></Button>
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
