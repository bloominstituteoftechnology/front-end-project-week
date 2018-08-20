import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchNote, deleteNote, updateNote } from '../actions';
import Note from './Note';
import EditNote from './EditNote';
import { Button } from 'reactstrap';

class SingleNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            updateActive: false
        }
    }
    componentDidMount(){
        this.props.fetchNote(this.props.match.params.id);
    }

    toggleUpdate = () => {
        this.setState((prevState) => { 
            return {updateActive: !prevState.updateActive}
        });
    }

    deleteNote = () => {
        this.props.deleteNote(this.props.match.params.id, this.props.history)
    }

    render() {
        if (this.props.fetchingNote){
            return(<div></div>)
        }
        return (
            <div>
                <Note title={this.props.note.title} content={this.props.note.textBody} />
                <Button onClick={this.toggleUpdate} color="primary">Update</Button>
                <Button onClick={this.deleteNote} color="danger">Delete</Button>
                {this.state.updateActive !== false
                    ? <EditNote onCancel={this.toggleUpdate} title={this.props.note.title} content={this.props.note.textBody} updateNote={this.props.updateNote} id={this.props.match.params.id} />
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingNote: state.fetchingNotes,
        note: state.note,
        error: state.error
    }
}

export default withRouter(connect(mapStateToProps, { fetchNote, deleteNote, updateNote })(SingleNote))