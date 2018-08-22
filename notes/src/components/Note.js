import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {fetchOneNote, deleteNote} from '../actions/actions';
import {Link, withRouter} from 'react-router-dom';
import { Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Body = styled.div`
    background: #F1F1F1;
    width: 899px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    font-family: Roboto;
    position: relative;
`;
const EditDel = styled.div`
    background: #F1F1F1;
    right: 0;
    position: absolute;
`;
const NoteTitle = styled.h1`
    font-weight: 800;
    color: #3C3C3C;
    padding: 2rem;
`;
const NoteContent = styled.div`
    line-height: 2rem;
    line-spacing: 1rem;
    padding: 2rem;
`;
class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            default: true,
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }
    componentDidMount(){
        this.props.fetchOneNote(this.props.match.params.id);
    }
    render(){
        return(
            <Row noGutters={true}>
                <Body>
                    <EditDel>
                        <Link to={{pathname: `/note/${this.props.note._id}/editnote`}}
                            style={{color: 'darkgray'}}>
                            edit
                        </Link>
                        <Button style={{color: 'darkgray',
                                        background:'none',
                                        border: 'none',
                                        textDecoration: 'none'}} 
                                        onClick={this.toggle}>
                            delete
                        </Button>
                    </EditDel>
                    <Modal isOpen={this.state.modal}
                            toggle={this.toggle}
                            autoFocus={this.state.default}
                            centered={this.state.default}
                            fade={this.state.default}>
                        <ModalHeader toggle={this.toggle} charCode="X" />
                        <ModalBody style={{textAlign: 'center'}}>
                            Are you sure you want to delete this?
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger"
                                    onClick={() => {this.props.deleteNote(this.props.match.params.id);
                                                    this.toggle();}}>
                                Delete
                            </Button>
                            <Button onClick={this.toggle} 
                                    style={{background: '#2AB4AE', color: 'white'}}>
                                No
                            </Button>
                        </ModalFooter>
                    </Modal>
                    <NoteTitle>{this.props.note.title}</NoteTitle>
                    <NoteContent>{this.props.note.textBody}</NoteContent>
                </Body>
            </Row>
        );
    }
}

export const mapStateToProps = state => ({
    note: state.note,
})

export default withRouter(connect(mapStateToProps, 
    {fetchOneNote,
     deleteNote})(Note));