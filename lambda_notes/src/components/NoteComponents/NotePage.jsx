import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'mdbreact';
import Styled from 'styled-components';
import axios from 'axios';

const Wrapper = Styled.div`
    margin-top: 30px;
    color: #4a494a;
    background-color: #f3f3f3;

`;

const Header = Styled.header`
    display: flex;
    justify-content: flex-end;
    margin-right: 2%;
    padding-top: 20px;

`;

const Button = Styled.button`
    width: 30%;
    height: 40px;
    background-color: #2ac0c4;
    color: white;
    border: 1px solid #969696;
    cursor: pointer;
    margin-top: 20px;
`;

const ButtonDanger = Styled.button`
    width: 30%;
    height: 40px;
    color: white;
    border: 1px solid #969696;
    cursor: pointer;
    margin-top: 20px;
    background-color: #d0011b;
`;

const LinkD = Styled.div`
    padding-right: 3%;
    color: #4a494a;

    text-decoration: underline;
    a:active {
        color: #4a494a;
    }

`;

const ModalContainer = Styled.div`
    text-align: center;
    border: 1px solid #969696;
    display: flex;
    flex-direction: column;
    height: 170px;
    padding-top: 40px;

`;

const ModalButtons = Styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export default class NotePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: null,
            modal14: false,
        };
    }
    

    componentDidMount() {
        const id = this.props.match.params.id;

        this.fetchNote(id);
    };

    fetchNote = id => {

        axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
        .then(response => {this.setState(() => ({note: response.data })); })
        .catch(err => console.error('GET_ERROR-NOTEPAGE', err));

        // const note = this.props.notes.map(note => note).filter(note => note.id === parseInt(id, 10));
        // this.setState({ note: note[0] })
    };

    toggle = e => {
        e.preventDefault();
        this.setState({modal14: !this.state.modal14});
    }

    removeNote = e => {
        this.props.removeNote(e, this.state.note.id);
    }

    render() {
        if (!this.state.note) {
            return <div>No Note Data Found...</div>
        }

        return (
            <Wrapper>
                <Header>
                    <LinkD><NavLink to="/create-note" onClick={event => this.props.updateNoteForm(event, this.state.note._id)} style={{color: "#4a494a" }}>Edit</NavLink></LinkD>
                    <LinkD><NavLink to="/" onClick={this.toggle} style={{color: "#4a494a" }}>Delete</NavLink></LinkD>
                </Header>
                <h1>{this.state.note.title}</h1>
                <p>{this.state.note.textBody}</p>

                <Modal isOpen={this.state.modal14} toggle={this.toggle} centered>
                <ModalContainer>
                    Are you sure you want to delete this?
                    <ModalButtons>
                    <ButtonDanger onClick={event => this.removeNote(event)}>Delete</ButtonDanger>
                    <Button onClick={this.toggle}>No</Button>
                    </ModalButtons>
                </ModalContainer>
                </Modal>
            </Wrapper>
        );
    };

};