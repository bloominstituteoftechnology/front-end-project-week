import React from 'react';
import SmallNote from './SmallNote';
import styled, { keyframes } from 'styled-components';

import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { sortAToZ, sortZToA } from '../actions';

const NotesContainer = styled.div`
    width: 100%;
    padding: 3rem;
    margin-left: 22rem;

    h2 {
        margin: 3rem 0 2rem 0;
        font-size: 2rem;
        font-weight: bold;
    }
`

const TopOfPage = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SearchInput = styled.input`
    border: none;
    border-bottom: 1px solid #AFAFAF;
    background-color: #F2F1F2;
    color: #494745;

    &:focus {
        outline: none;
    }
`

const YourNotes = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const NotesLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const SortDiv = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    margin-bottom: 1.5rem;

    h3 {
        font-size: 1.4rem;
        margin-right: 1rem;
    }

    button {
        padding: 0.5rem;
        border: 1px solid #AFAFAF;
        background-color: #24B8BD;
        color: #EAF4F3;
        margin-right: 1rem;
    }
`

const LoadingDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        font-weight: bold;
        font-size: 2.5rem;
    }
`

class NotesList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: '',
        }
    }

    handlesChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        if (this.props.notes.length) {
            return(
                <NotesContainer>
                    <TopOfPage>
                        <h2>Your Notes:</h2>
                        <form>
                            <SearchInput 
                                type='text'
                                name='searchText'
                                value={this.state.searchText}
                                placeholder='&#8981; Search...'
                                onChange={this.handlesChanges}
                            />
                        </form>
                    </TopOfPage>
                    {/* <SortDiv>
                        <h3>Sort By Title: </h3>
                        <button onClick={this.setState({ sort: true })}>A - Z</button>
                        <button onClick={() => this.props.sortZToA(this.props.notes)}>Z - A</button>
                    </SortDiv> */}
                    <YourNotes>
                        {this.props.notes
                            .filter(note => 
                                note.title.includes(this.state.searchText) || note.textBody.includes(this.state.searchText)
                                )
                            .map(note => (
                            <NotesLink key={note._id} exact to={`/note/${note._id}`}>
                                <SmallNote  noteData={note} />
                            </NotesLink>
                        ))}
                    </YourNotes>
                </NotesContainer>
            );
        } else {
            return (
                <NotesContainer>
                    <TopOfPage>
                        <h2>Your Notes:</h2>
                        <form>
                            <SearchInput 
                                type='text'
                                name='searchText'
                                value={this.state.searchText}
                                placeholder='&#8981; Search...'
                                onChange={this.handlesChanges}
                            />
                        </form>
                    </TopOfPage>
                   <LoadingDiv>
                        <h2>Loading..</h2>
                   </LoadingDiv>
                </NotesContainer>
            );
        }
    }
} 

export default withRouter(
    connect(null, { sortAToZ, sortZToA })(NotesList)
);