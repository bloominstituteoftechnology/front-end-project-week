import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {fetchOneNote, deleteNote} from '../actions/actions';
import {Link, withRouter} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import DeleteModal from './DeleteModal';

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
    padding-top: 1rem;
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
    color: #3C3C3C;
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
            <Body>
                <EditDel>
                    <Link to={`/note/${this.props.note._id}/editnote`} style={{color: 'darkgray'}}>edit</Link>   
                     <ResetButton onClick={this.toggle}>delete</ResetButton>
                      <Modal isOpen={this.state.modal}
                             toggle={this.toggle}
                             autoFocus={this.state.default}
                             centered={this.state.default}
                             fade={this.state.default}>
                            <ModalHeader toggle={this.toggle} charCode="X" />
                            <ModalBody>Are you sure you want to delete this?</ModalBody>
                            <ModalFooter>
                                <Button color="danger"
                                        onClick={() => this.props.deleteNote(this.props.match.params.id)}>
                                    Delete
                                </Button>
                                <button onClick={this.toggle} 
                                        style={{background: '#2AB4AE', color: 'white'}}>
                                    No
                                </button>
                            </ModalFooter>
                        </Modal>
                </EditDel>
                <NoteTitle>{this.props.note.title}</NoteTitle>
                <NoteContent>{this.props.note.textBody}</NoteContent>
            </Body>
        );
    }
}

export const mapStateToProps = state => ({
    note: state.note,
})

export default withRouter(connect(mapStateToProps, 
    {fetchOneNote, deleteNote})(Note));