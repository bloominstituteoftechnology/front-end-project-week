import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { deleteNote, editNote } from '../Actions';
import DeleteModal from './DeleteModal';
import Sidebar from './Sidebar';
import '../css/NoteView.css';

class NoteView extends Component {
    state = {
        // id: +this.props.match.params.id,
        note: [],
        modal: false,
    };
   
    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    async componentDidMount() {
        axios
            .get(`https://lambda-notes-back-end.herokuapp.com/notes/${this.props.match.params.id}`)
            .then(res => {
            const note = res.data;
            this.setState({ note });
            // console.log(res.data)
        });
        // const note = await this.props.notes.find(note => note.id === this.state.id);
        // this.setState({ note });
    }

    delete = (id) => {
        axios
            .delete(
                `https://lambda-notes-back-end.herokuapp.com/notes/delete/${
                this.props.match.params.id
                }`
            )
            .then(res => {
                const note = res.data;
                // this.setState({ note });
                console.log(note);
                // this.props.deleteNote(id);
                // this.props.history.push('/');
            });
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs='3'>
                            <Sidebar />
                        </Col>
                        <Col xs='9'>
                            <div className='viewLinks'>
                                <Link to={ `/notes/${this.props.match.params.id}/edit` }>
                                    edit
                                </Link>
                                <a className='noteViewLink' onClick={ this.toggle }>delete</a>
                                { this.state.modal && (
                                    <DeleteModal
                                        toggle={ this.toggle }
                                        delete={ this.delete }
                                        { ...this.state }
                                    />
                                ) }
                            </div>
                            <h4 className='noteTitle'>{ this.state.note.title }</h4>
                            <p>{ this.state.note.content }</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state,
    };
};
export default connect(mapStateToProps, { deleteNote, editNote })(NoteView);