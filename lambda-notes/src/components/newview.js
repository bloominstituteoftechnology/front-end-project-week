import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

class NewView extends Component {

    state = {
        text: ''
    }

    addNote = (event) => {
        event.preventDefault();
        const noteList = this.state.icons;
        noteList.push(this.state.text);
        this.setState({
            text: '',
            icons: noteList
        });
    }

    handleInput = (event) => {
        this.setState({ text: event.target.value });
    }

    render() {
        return (
            <div className="section">

                <div className="section__content__left">
                    <p className="title">Lambda Notes</p>
                    <StyledLink to="/noteview"><div className="button__main">View Your Notes</div></StyledLink>
                    <br />
                    <StyledLink to="/newview"><div className="button__main">+ Create New Note</div></StyledLink>

                </div>

                <div className="section__content__right">
                    <div className="section__content__inputs">
                        <h3>Create New Note</h3>

                     
                        <form onSubmit={this.addNote}>
                            <input type="text" className="note-title" placeholder="Note Title"></input>
                            <br />
                            <textarea className="note-content" rows="60" cols="125" placeholder="Note Content"></textarea>
                            <br />
                            <div className="button__main">Save</div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewView;