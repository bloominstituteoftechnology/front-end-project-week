import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { viewSingleNote } from '../actions/index';


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
        document.getElementById('delete-form').style.display = 'block';
    }

    toggleDeleteFormOff = () => {
        document.getElementById('delete-form').style.display = 'none';
    }

    render() {
        return ( 
            <Container>
                <DeleteForm id='delete-form'>
                    <span> Are you sure you want to delete this?</span>
                    <Link to='/'>Delete</Link>
                    <button onClick={this.toggleDeleteFormOff}>No</button>
                </DeleteForm>
                <Nav>
                    <Link to='/edit-note' style={{ paddingRight: '15px', color: 'black' }}>edit</Link>
                    <Button onClick={this.toggleDeleteFormOn}>delete</Button>
                </Nav>
                <h3>{this.props.note.title}</h3>
                <span>{this.props.note.content}</span>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state
    }
}
 
export default connect(mapStateToProps, { viewSingleNote })(NoteView);