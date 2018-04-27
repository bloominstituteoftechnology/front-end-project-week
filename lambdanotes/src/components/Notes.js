import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dotdotdot from 'react-dotdotdot';

const Wrapper = styled.div`
  background-color: #f2f1f2;
  width: 75%;
  padding: 60px 0 70px 2.4em;
`;

const Heading = styled.h3`
    font-size: 2em;
    font-weight: bold;
    line-height: 0.8;
`;

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
`
const IndividualNote = styled.div`
    width: 30%;
    background-color: #FFF;
    padding: 12px 2em 63px 2em;
    margin: 1px 1.7em 27px 0.2em;
`;

const NoteHeading = styled.h3`
    font-weight: bold;
    font-size: 2em;
`;

const NoteParagraph = styled.p`
    font-size: 1.4em;
    margin-top: 10px;
`;

const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;
    cursor: pointer;
`;

const Input = styled.input`
    padding: 0.5em 0.5em 1em 0.5em;
    margin: 0 0 0 5em;
    border-radius: 3px;
    width: 50%;
`;

const Container = styled.div`
    display: flex;
`

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
    }

    handleSearchInput = e => {
        this.setState({ searchInput: e.target.value });
    }

    render() {
        return <Wrapper>
            <Container>
                <Heading>Your Notes:</Heading>
                <Input type="text" value={this.state.searchInput} placeholder="Search Notes" onChange={this.handleSearchInput} />
            </Container>
            <List>
              {this.props.notes.map(note => {
                if (this.state.searchInput === '') {
                  return <IndividualNote key={note.id}>
                      <StyledLink to={`/notes/${note.id}`}>
                        <NoteHeading>{note.title}</NoteHeading>
                        <hr />
                        <Dotdotdot clamp={5}>
                          <NoteParagraph>{note.text}</NoteParagraph>
                        </Dotdotdot>
                      </StyledLink>
                    </IndividualNote>;
                } else if (note.title
                    .toLowerCase()
                    .includes(
                      this.state.searchInput.toLowerCase(),
                    ) || note.text
                    .toLowerCase()
                    .includes(this.state.searchInput.toLowerCase())) {
                  return <IndividualNote key={note.id}>
                      <StyledLink to={`/notes/${note.id}`}>
                        <NoteHeading>{note.title}</NoteHeading>
                        <hr />
                        <Dotdotdot clamp={5}>
                          <NoteParagraph>{note.text}</NoteParagraph>
                        </Dotdotdot>
                      </StyledLink>
                    </IndividualNote>;
                }
              })}
            </List>
          </Wrapper>;
    }
};

export default Notes;
