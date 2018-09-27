import React from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'mdbreact';
import Styled from 'styled-components';
import Remarkable from 'remarkable';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const Wrapper = Styled.div`
    margin-top: 30px;
    padding-left: 3%;
    color: #4a494a;
    background-color: #f3f3f3;
    white-space: pre-line;

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

class NotePage extends React.Component {
    state = {
        modal14: false,
        note: {},
    }

    componentDidMount() {
        // const note = this.props.notes.find(
        //     note => note._id === this.props.match.params.id
        // );

        // this.setState({ note });

        this.fetchNote(this.props.match.params.id);
    }

    fetchNote = id => {
        axios.get('https://killer-notes.herokuapp.com/note/get/all')
        .then(response => {
            const note = response.data.find(note => note._id === id);
            console.log('FETCH', note)
            this.setState({ note });
        })
        .catch(err => {
            console.log(err);;
        });
    }

    handleDelete = () => {
        this.props.handleDeleteNote(this.state.note._id);
        this.props.history.push('/');
    };

    toggle = e => {
        e.preventDefault();
        console.log('TOGGLE');
        this.setState({modal14: !this.state.modal14});
    }

    render() {
        let md = new Remarkable();
        return (
            <Wrapper>
                <Header>
                    <LinkD><NavLink to="/form" onClick={event => this.props.goToForm(event, this.state.note._id)} style={{color: "#4a494a" }}>Edit</NavLink></LinkD>
                    <LinkD><NavLink to="/" onClick={this.toggle} style={{color: "#4a494a" }}>Delete</NavLink></LinkD>
                </Header>
                <h1>{this.state.note.title}</h1>
                <h5>Tags: {this.state.note.tags}</h5>
                <br />
                <h5>Summary</h5>
                {/* <div dangerouslySetInnerHTML={{ __html: md.render(`${this.state.note.textBody}`) }} /> */}
                <ReactMarkdown source={this.state.note.textBody} />

                <Modal isOpen={this.state.modal14} toggle={this.toggle} centered>
                <ModalContainer>
                    Are you sure you want to delete this?
                    <ModalButtons>
                    <ButtonDanger onClick={this.handleDelete}>Delete</ButtonDanger>
                    <Button onClick={this.toggle}>No</Button>
                    </ModalButtons>
                </ModalContainer>
                </Modal>
            </Wrapper>
        )
    }
}

export default NotePage;