import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import { deleteNote } from '../Actions';
import DeleteModal from './DeleteModal';
import Sidebar from './Sidebar';
import '../Styles/NoteView.css';

class NoteView extends Component {
    state = {
        id: +this.props.match.params.id,
        note: {
            title: '',
            content: '',
        },
        modal: false,
    };
    
    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    async componentDidMount() {
        const note = await this.props.notes.find(note => note.id === this.state.id);
        this.setState({ note });
    }

    delete = (id) => {
        this.props.deleteNote(id);
        this.props.history.push('/');
    }    

    render () {
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
                                    <a className='noteViewLink'>edit</a>
                                    <a className='noteViewLink' onClick={this.toggle}>delete</a>
                                    {this.state.modal && (
                                        <DeleteModal
                                            toggle={this.toggle}
                                            delete={this.delete}
                                            {...this.state}
                                        />
                                    )}
                                </div>
                                <h4 className='noteTitle'>{ this.state.note.title }</h4>
                                <p>{ this.state.note.content }</p>
                            </div>
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
export default connect(mapStateToProps, { deleteNote })(NoteView);