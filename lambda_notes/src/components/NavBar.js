import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getNotes, searchNotes } from '../actions';
import { connect } from 'react-redux';

const StyledSideBar = styled.div`
    display: flex;
    position: fixed;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    background: #D8D8D8;
    width: 25%;
    max-width: 200px;
    height: 100%;
    border: 2px solid #979797;
    padding: 1%;
    font-family: Roboto Bold;
    font-size: 1.5rem;
    color: #4A4A4A;
`;

const StyledButtonLinks = styled.div`
    width: 100%;
    height: 100vh;
`;

const StyledButton = styled.button`
    background: #2BC1C4;
    padding: 1%;
    margin-top: 5%;
    color: white;
    border: 2px solid #979797;
    width: 100%;
    height: 40px;
    font-family: Raleway Medium;
    font-size: 1rem;
    &:hover{cursor: pointer;}
`;

const H5 = styled.h5`
    margin-bottom: 1%;
`;

class NavBar extends Component {
    constructor(){
        super();
        this.state = {
            search: '',
        }
    }

    handleInput = (e) => {
        console.log(e.target.value);
        this.setState({[e.target.name] : e.target.value})
    }

    searchNotes = (e) => {
        e.preventDefault();
        this.props.searchNotes(this.state.search);
        this.setState({ search: '' });
    }
    
    render(){
        return(
            <StyledSideBar>
                <StyledButtonLinks>
                    <h3>Lambda Notes</h3>
                    <Link to={'/'}><StyledButton onClick={this.props.getNotes}>View Your Notes</StyledButton></Link>
                    <Link to={'/create'}><StyledButton>Create New Note</StyledButton></Link>
                    <form onSubmit={this.searchNotes}>
                        <H5>Search</H5>
                        <input type='text'
                                name='search'
                                value={this.state.search}
                                placeholder='Search Here'
                                onChange={this.handleInput} />
                    </form>
                </StyledButtonLinks>
            </StyledSideBar>
        );   
    }
}

const mapStateToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, { getNotes, searchNotes })(NavBar);