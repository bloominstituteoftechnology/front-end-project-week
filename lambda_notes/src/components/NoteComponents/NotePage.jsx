import React from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'mdbreact';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    margin-top: 30px;
    padding-left: 3%;
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

function NotePage(props) {
    const note = props.notes.find(
        note => note._id === props.match.params.id
    );

    let tags = '';

    function handleDelete() {
        props.handleDeleteNote(note._id);
        props.history.push('/');
    };

    if (props.isLoading || props.notes.length === 0) return <h2>Loading Notes... Pleas grab some coffee</h2>
    tags = note.tags.join(', ');
    

    return (
        <Wrapper>
            <Header>
                <LinkD><NavLink to="/form" onClick={event => props.goToForm(event, note._id)} style={{color: "#4a494a" }}>Edit</NavLink></LinkD>
                <LinkD><NavLink to="/" onClick={props.toggle} style={{color: "#4a494a" }}>Delete</NavLink></LinkD>
            </Header>
            <h1>{note.title}</h1>
            <h5>Tags: {tags}</h5>
            <br />
            <h5>Summary</h5>
            <p>{note.textBody}</p>

            <Modal isOpen={props.modal14} toggle={props.toggle} centered>
            <ModalContainer>
                Are you sure you want to delete this?
                <ModalButtons>
                <ButtonDanger onClick={handleDelete}>Delete</ButtonDanger>
                <Button onClick={props.toggle}>No</Button>
                </ModalButtons>
            </ModalContainer>
            </Modal>
        </Wrapper>
    )
}

export default NotePage;