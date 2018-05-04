import React from "react";
import { connect } from "react-redux";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Row, Col, Modal } from "reactstrap";

import styled from "styled-components";
import { deleteNote } from "../actions";
import "./note.css";

const H3 = styled.h3`
    margin-top: 50px;
    margin-bottom: 30px;
    font-size: 1.4rem;
    font-weight: bold;
    opacity: 0.8;
`;

const Btn = styled.button`
    width: 207px;
    height: 45px;
    background: #2bc1c4;
    margin-left: 10px;
    color: white;
    border: 1px solid black;
`;
const ModalButton = styled.div`
    display: flex;
    justify-content: center;
`;

class Note extends React.Component {
    state = {
        Redirect: false,
        Note: {},
        DeleteModal: false,
    };

    render() {
        return (
            <React.Fragment>
                {this.state.Redirect ? <Redirect to={"/"} /> : null}
                {this.state.Note ? (
                    <Col xs="9">
                        {this.state.DeleteModal ? (
                            <Modal className="Modal" isOpen={this.state.DeleteModal} onClose={this.toggleModal}>
                                <p>Are you sure you want to delete this?</p>
                                <ModalButton>
                                    <Btn className="Button-Danger" onClick={this.handleDelete}>
                                        Delete
                                    </Btn>
                                    <Btn className="" onClick={this.toggleModal}>
                                        No
                                    </Btn>
                                </ModalButton>
                            </Modal>
                        ) : null}
                        <Row>
                            <Col className="d-flex justify-content-end mr-5 mt-3">
                                <Link className="Link__Note mr-2" to={`/note/edit/${this.state.Note._id}`}>
                                    edit
                                </Link>
                                <Link onClick={this.toggleModal} className="Link__Note ml-2" to={`/note/${this.state.Note._id}`}>
                                    delete
                                </Link>
                            </Col>
                        </Row>
                        <Row className="mb-5 mr-2 ml-2">
                            <Col>
                                <H3>{this.state.Note.title}</H3>
                                <p className="P__Content">{this.state.Note.content}</p>
                            </Col>
                        </Row>
                    </Col>
                ) : null}
            </React.Fragment>
        );
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const notes = this.props.notes;
        const note = notes.find(note => note._id.toString() === id.toString());
        this.setState({ Note: note });
    }

    handleDelete = () => {
        this.props.deleteNote(this.props.user.id, this.state.Note.id);
        this.setState({ DeleteModal: false, Redirect: true });
    };

    toggleModal = () => {
        this.setState({ DeleteModal: !this.state.DeleteModal });
    };
}

const mapStateToProps = state => {
    return state;
};

export default withRouter(connect(mapStateToProps, { deleteNote })(Note));
