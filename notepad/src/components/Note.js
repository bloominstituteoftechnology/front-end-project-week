import React, { Component } from 'react';
import { deleteNote, getNote, startEditing } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import DeleteModal from './Modal';

class Note extends Component {
    constructor(props){
        super(props);
        this.state = {
            note: {},
            modal: false
        }

    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getNote(id);
    }
     editNote = () => {
         this.props.startEditing(this.props.note);
         this.props.history.push(`/notes/edit/${this.props.note.id}`)
    }
    deleteNote = () => {
        this.props.deleteNote(this.props.note.id);
        this.props.history.push(`/notes/`)
    }

render(){
    const { note } = this.state;
    const props = {
        note: this.state
    }
    return (
        <div key={this.props.note.id}>
        <Row className="editDelete" > 
                <Link
                    to={`/notes/edit/${this.props.note.id}`}
                    onClick={this.editNote} >
                    edit
                </Link>
                <DeleteModal show={this.props.modal}
                    onClose={this.toggle} 
                    deleteNote={this.deleteNote} 
                    {...props} 
                />
        </Row> 
        <Row> 
            <div className={'note'}>
                <h2>{this.props.note.title}</h2>
                <p>{this.props.note.content}</p>
            </div>
        </Row> 
        </div>
    );
}
 
}

const mapStateToProps = state => {
    return {
        note: state.note,
        error: state.error,
        pending: state.fetchingNotes,

    }
}

export default connect(mapStateToProps, { getNote, deleteNote, startEditing })(Note);

