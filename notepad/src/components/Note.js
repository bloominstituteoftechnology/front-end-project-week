import React, { Component } from 'react';
import { deleteNote, getNote, startEditing } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from "reactstrap";
import { Row, Col } from 'reactstrap';




class Note extends Component {
    constructor(props){
        super(props);
       const { note } = props;
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
    return (
        <div key={this.props.note.id}>
        <Row className="editDelete" > 
            <Col>
                <Link
                    to={`/notes/edit/${this.props.note.id}`}
                    onClick={this.editNote}>
                    edit
                </Link>
                <Link to={`/notes/edit/${this.props.note.id}`} onClick={this.deleteNote}>delete</Link>
            </Col>
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

