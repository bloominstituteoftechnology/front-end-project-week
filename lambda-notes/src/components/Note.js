import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import { getNote, deleteNote } from '../actions';

class Note extends Component {
    render() {
        const id = this.props.note.id
            return (
                <div>
                    <h1> My Note </h1>
                        {!this.props.note ?
                            <h2> loading notes</h2>: null}
                                <h2> {this.props.note.title} </h2>
                                <p> {this.props.note.body} </p>
                                <Button><Link to={`/notes/update/${this.props.note.id}`}> Update Note </Link></Button>
                                <Button onClick={this.delete()}><Link to={`/notes/delete/${this.props.note.id}`}> Delete Note </Link></Button>
                                <Button><Link to={`/`}> Home </Link></Button>
                </div>
            );
        }   

    delete() {
        const id = this.props.match.params.id
        this.props.deleteNote(id)
    }

    componentDidMount() {
        const id = (this.props.match.params.id)
        this.props.getNote(id);
    }
}
    const mapStateToProps = (state) => {
        return {
            note:state.note,
        }
    }
    
  export default connect(mapStateToProps, { getNote, deleteNote })(Note);
