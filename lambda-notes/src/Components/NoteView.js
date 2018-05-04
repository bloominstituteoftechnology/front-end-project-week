import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Modal, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

import { deleteNote } from '../Actions';
import Sidebar from './Sidebar';
import '../Styles/NoteView.css';


const deleteModal = () => {
    return (
        <div>
            <Button color="danger" onClick={ this.toggle }>{ this.props.buttonLabel }</Button>
            <Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>

                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>

            </Modal>
        </div>
    )
}


const NoteView = (props) => {
    // console.log('PROPS', props)
    const noteId = parseInt(props.match.params.id);
    console.log("NOTEID", noteId)
    return (
        <div>

            <Container>
                <Row>
                    <Col xs='3'>
                        <Sidebar />
                    </Col>
                    <Col xs='9'>
                        <div className='noteView'>
                            <div className='viewLinks'>
                           
                                <a>edit</a>
                                <Link to={ '/' }>
                                    <button onClick={ (notes) => props.deleteNote(props.notes[noteId])}>delete</button>
                                </Link>

                            </div>
                            <h4 className='noteTitle'>{ props.notes[noteId].title }</h4>
                            <p>{ props.notes[noteId].content }</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        notes: state,
    }
}
export default connect(mapStateToProps, {deleteNote})(NoteView);