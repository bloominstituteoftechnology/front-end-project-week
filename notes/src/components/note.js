import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { 
    Row,
    Col,
    Modal,
} from 'reactstrap';
import styled from 'styled-components';
import { getNote, deleteNote } from '../actions/notesActions';
import './note.css';
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
    background: #2BC1C4;
    margin-left: 10px;
    color: white;
    border: 1px solid black;
    
`
const ModalButton = styled.div`
    display: flex;
    justify-content: center;
`
class Note extends React.Component {
    state = {
        Redirect: false,
        Note: {},
        DeleteModal: false,
        Refresh: false,
    }
    render() {
        return (
            <React.Fragment>
                {(this.state.Redirect) ? (<Redirect to={'/'}/>) : ('') }  
                {(this.state.Note) ? (
                <Col xs="9">
                { (this.state.DeleteModal) ? (
                    <Modal className="Modal" isOpen={this.state.DeleteModal} onClose={this.toggleModal}>
                        <p>Are you sure you want to delete this?</p>
                        <ModalButton>
                            <Btn className="" onClick={this.toggleModal}>No</Btn>
                            <Btn className="Button-Danger" onClick={this.handleDelete}>Delete</Btn>
                        </ModalButton>                    
                    </Modal>
                ) : ('') }
                <Row>
                    <Col className="d-flex justify-content-end mr-5 mt-3">
                        {this.props.isAuth ? (
                        <React.Fragment>
                            <Link className= "Link__Note mr-2" to={`/note/edit/${this.state.Note.id}`} >edit</Link>
                            <Link onClick={ this.toggleModal } className= "Link__Note ml-2" to={`/note/${this.state.Note.id}`} >delete</Link>  
                        </React.Fragment>
                        ) : (
                            <Link className= "Link__Note mr-2" to={`/login`} >Login</Link>
                        )}                      
                    </Col>
                </Row>
                <Row className="mb-5 mr-2 ml-2" >
                    <Col>
                        <H3>{this.state.Note.title}</H3>
                        <p className="P__Content" >{this.state.Note.content}</p>
                    </Col>
                </Row>
                </Col>
                ) : ('') }  
            </React.Fragment>
        );
    }

    componentDidMount() {
        console.log(this.props)
        const id = this.props.match.params.id;

        if(this.props.notes.length === 0){
            // it was a refresh
            this.props.getNote(id);
            this.setState({
                Refresh: true,
            });
        }else{
            const notes = this.props.notes;
            const note = notes.find(note => (note.id).toString() === id.toString())
            this.setState({
                Note: note, 
            });
        }
    }

    componentWillUpdate(){
        if(this.state.Refresh){
            // page was manually refreshed, repopulate the note
            this.setState({
                Note: this.props.note,
                Refresh: false,
            })
        }
    }

    handleDelete = () => {
        this.props.deleteNote(this.state.Note.id);
        this.setState({ 
            DeleteModal: false,
            Redirect: true,
        })
    }
    toggleModal = () => {
        this.setState({ DeleteModal: !this.state.DeleteModal})
    }
};
const mapStateToProps = ( { note, notes, isAuth } ) => {
    return {
        note    : notes.note,
        notes   : notes.notes,
        isAuth,
    }
};
export default withRouter(connect(mapStateToProps, {getNote, deleteNote })(Note));
