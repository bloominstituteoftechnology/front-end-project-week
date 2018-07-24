import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';


const Container = styled.div`
    width: 650px;
    margin-top: 15px;
`;

const Nav = styled.div`
    text-align: right;
    margin-bottom: 25px;
`;

class NoteView extends Component {
    render() {
        return ( 
            <Container>
                <Nav>
                    <Link to='/edit-note' style={{ paddingRight: '15px', color: 'black' }}>edit</Link>
                    <Link to='/' style={{ color: 'black' }}>delete</Link>
                </Nav>
                <h3></h3>
                <span></span>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        note: state
    }
}
 
export default connect(mapStateToProps, {  })(NoteView);