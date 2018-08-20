import React from 'react';
import styled from 'styled-components';
import {Link, Route} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditView from './EditView';

const Body = styled.div`
    background: #F1F1F1;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    font-family: Roboto;
`;

const EditDel = styled.div`
    padding-top: 2rem;
    position: fixed;
    right: 24rem;
`
const NoteTitle = styled.h1`
    font-weight: 800;
    color: #3C3C3C;
    padding: 1rem;
`
const NoteContent = styled.div`
    line-height: 2rem;
    line-spacing: 1rem;
    padding: 1rem;
`

const ResetButton = styled.button`
    background: none repeat scroll 0 0 transparent;
    border: medium none;
    border-spacing: 0;
    color: #26589F;
    font-family: 'PT Sans Narrow',sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.42rem;
    list-style: none outside none;
    margin: 0;
    padding: 0;
    text-align: left;
    text-decoration: none;
    text-indent: 0;
`
class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            default: true
        }
    }
    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }
    render(){
        let note = this.props.notes.filter( note => note.id == this.props.match.params.id)[0];
        return(
            <Body>
                <EditDel>
                    <Link to={`/note/${note.id}/editnote`} style={{color: 'darkgray'}}>edit   </Link>   
                    <Route exact path={`/note/${note.id}/editnote`} render={(props) => <EditView {...props} /> }/>
                    <ResetButton onClick={this.toggle}>delete</ResetButton>
                        <Modal isOpen={this.state.modal}
                        autoFocus={this.state.default}
                        centered={this.state.default} fade={this.state.default} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle} charCode="X"></ModalHeader>
                            <ModalBody>Are you sure you want to delete this?</ModalBody>
                            <ModalFooter>
                                <Button color="danger">Delete</Button>
                                <button style={{background: '#2AB4AE', color: 'white'}}>No</button>
                            </ModalFooter>
                        </Modal>
                </EditDel>
                <NoteTitle>{note.title}</NoteTitle>
                <NoteContent>{note.content}</NoteContent>
            </Body>
        );
    }
}

export default Note;