import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
    width: 650px;
    margin-top: 15px;
`;

const Nav = styled.div`
    text-align: right;
    margin-bottom: 25px;
`;

const Button = styled.button`
    border: none;
    text-decoration: underline;
    font-size: 14px;
    background: #F0EFF0;
`;

const DeleteForm = styled.div`
    display: none;
    position: absolute;
    top: center;
    width: 420px;
    height: 70px;
    border: 1px solid black;
    background: white;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px;
`;

const DeleteSpan = styled.span`
    width: 100%;
    text-align: center;
    margin-bottom: 15px;
`;

const DelButton = styled.button`
    width: 175px;
    height: 40px;
    background: #20AFB5;
    color: white;
    font: bold;
    font-size: 16px;
    border: 1px solid #E3DADC;
`;


class NoteView extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            note: null,
        }
    }

    toggleDeleteFormOn = () => {
        document.getElementById('delete-form').style.display = 'flex';
        document.getElementById('app').style.opacity = '.6';
    }

    toggleDeleteFormOff = () => {
        document.getElementById('delete-form').style.display = 'none';
        document.getElementById('app').style.opacity = '1';
    }

    render() {
        return ( 
            <Container>
                <DeleteForm id='delete-form'>
                    <DeleteSpan> Are you sure you want to delete this?</DeleteSpan>
                    <Link to='/' style={{ 
                        textDecoration: 'none',
                        height: '30px', 
                        width: '175px', 
                        background: '#C30019', 
                        color: 'white', 
                        font: 'bold', 
                        border: '#E3DADC', 
                        textAlign: 'center', 
                        paddingTop: '10px' 
                    }}>
                        Delete
                    </Link>
                    <DelButton onClick={this.toggleDeleteFormOff}>No</DelButton>
                </DeleteForm>
                <Nav>
                    <Link to={{pathname: `/edit-note/${this.props.location.state.id}`, state: this.props.location.state}} style={{ paddingRight: '15px', color: 'black' }}>edit</Link>
                    <Button onClick={this.toggleDeleteFormOn}>delete</Button>
                </Nav>
                <h3>{this.props.location.state.title}</h3>
                <span>{this.props.location.state.content}</span>
            </Container>
        );
    }
}

export default NoteView;