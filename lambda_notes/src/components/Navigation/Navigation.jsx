import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FormInline, Fa } from 'mdbreact';
import Styled from 'styled-components';

const Header = Styled.header`
    position: absolute;
    bottom: 0;
    max-width: 300px;
    min-width: 300px;
    width: 30%;
    height: 100%;
    background-color: #d7d7d7;
    color: #4a494a
    border-right: 2px solid #c2c2c2;

    display: flex;
    flex-direction: column;
    padding: 1%;

    h1 {
        padding-top: 30px;
        font-size: 60px;
        font-weight: bold;
        margin-bottom: 20px;
        margin-left: 10%;
        line-height: 40px;
    }

    h2 {
        font-size: 60px;
        font-weight: bold;
        margin-top: -30px;
        margin-bottom: 20px;
        margin-left: 10%;
    }

    button {
        width: 95%;
        background-color: #2ac0c4;
    }

    
`;

const Search = Styled.div`
    margin-left: 8%;
`

const Button = Styled.button`
    width: 80%;
    height: 60px;
    background-color: #2ac0c4;
    border: 1px solid #969696;
    color: white;
    border: none;
    margin-left: 2%;
    margin-bottom: 20px;
    cursor: pointer;
`;

class Navigation extends Component {
    state = {
        inputValue: '',
    };
    

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSearch(this.state.inputValue);
    };

    handleChange = e => {
        this.setState({ inputValue: e.target.value}, () => this.handleSubmit(e));
    }

    render() {
        return (
            <Header>
                <h1>Lambda</h1>
                <h2>Notes</h2>
                <Search>
                <FormInline className="md-form active-cyan active-cyan-2 ">
                    <Fa icon="search" />
                    <input value={this.state.inputValue} onChange={e => this.handleChange(e)}  className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"/>
                </FormInline>
                </Search>
                <NavLink to="/"><Button type="button" onClick={event => this.props.isUpdate(event)}>View Your Notes</Button></NavLink>
                <NavLink to="/create-note"><Button type="button" onClick={event => this.props.isUpdate(event)}>+ Create A New Note</Button></NavLink>
            </Header>
        )
    }
}

export default Navigation;