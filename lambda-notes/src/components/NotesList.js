import React from 'react';
import SmallNote from './SmallNote';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const NotesContainer = styled.div`
    width: 100%;
    padding: 3rem;
    margin-left: 22rem;

    h2 {
        margin: 3rem 0;
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
    }
} 

export default NotesList;