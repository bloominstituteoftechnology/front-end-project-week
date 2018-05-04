import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dotdotdot from 'react-dotdotdot';
import ReactMarkdown from 'react-markdown';
import Dragula from 'react-dragula';
import { Button, ButtonGroup } from 'reactstrap';

const Wrapper = styled.div`
  background-color: #f2f1f2;
  width: 75%;
  padding: 60px 0 70px 2.4em;
`;

const Heading = styled.h3`
  font-size: 2em;
  font-weight: bold;
  line-height: 0.8;
  margin-top: 25px;
  text-align: center;
  margin-bottom: 1em;

  @media (max-width: 751px) {
    margin-top: 0;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;

  @media (max-width: 751px) {
    justify-content: center;
  }
`;
const IndividualNote = styled.div`
  width: 29%;
  background-color: #fff;
  padding: 12px 2em 33px 2em;
  margin: 1px 1.7em 27px 0.2em;

  @media (max-width: 1010px) {
    width: 44%;
  }

  @media (max-width: 751px) {
    width: 90%;
  }
`;

const NoteHeading = styled.h3`
    font-weight: bold;
    font-size: 1.5em;
`;

const NoteParagraph = styled.div`
    font-size: 1.4em;
    margin-top: 10px;
`;

const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;
    cursor: pointer;
`;

const Input = styled.input`
  padding: 0 1.5em 0 3.5em;
  margin: 0 0 0 5em;
  border-radius: 3px;
  width: 25%;

  @media (max-width: 1080px) {
    width: inherit;
  }

  @media (max-width: 751px) {
    padding: 0.5em 1.5em 0.5em 3.5em;
    margin: 1em 0 0 0;
    width: 50%;
    align-self: center;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledButtonGroup = styled(ButtonGroup)`
  margin-left: 2em;

  @media (max-width: 751px) {
    margin-left: 0;
  }

  @media (max-width: 600px) {
    display:flex;
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  background-color: #55babc;
`;

// const StyledButtonBottom = styled(StyledButton)`
//     padding-left: 1.61em;
// `;

const ButtonContainer = styled.div`
  @media (max-width: 1080px) {
    margin-bottom: 0.5em;
  }

  @media (max-width: 751px) {
    align-self: center;
    margin-top: 0.5em;
  }
`;

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            sortKey: ''
        }
        this.filters = {
            'Title_ASC': this.sortByTitleAscending,
            'Title_DESC': this.sortByTitleDescending,
            // 'ID_ASC': this.sortByIdAscending,
            // 'ID_DESC': this.sortByIdDescending
        }
    }


    handleSearchInput = e => {
        this.setState({ searchInput: e.target.value });
    }

    sortByTitleAscending = (a, b) => {
        a = a.title.toUpperCase();
        b = b.title.toUpperCase();

        if(a < b) {
            return -1;
        }
        if(a > b) {
            return 1;
        }
        return 0;
    }

    sortByTitleDescending = (a, b) => {
        a = a.title.toUpperCase();
        b = b.title.toUpperCase();

        if (a < b) {
          return 1;
        }
        if (a > b) {
          return -1;
        }
        return 0;
    }

    // sortByIdAscending = (a, b) => {
    //     a = a.title.toUpperCase();
    //     b = b.title.toUpperCase();

    //     if (a < b) {
    //       return -1;
    //     }
    //     if (a > b) {
    //       return 1;
    //     }
    //     return 0;
    // }

    // sortByIdDescending = (a, b) => {
    //     a = a.title.toUpperCase();
    //     b = b.title.toUpperCase();

    //     if (a < b) {
    //       return 1;
    //     }
    //     if (a > b) {
    //       return -1;
    //     }
    //     return 0;
    // }

    dragulaDecorator = (componentBackingInstance) => {
        if(componentBackingInstance) {
            let options = { };
            Dragula([componentBackingInstance], options);
        }
    }

    render() {
        const sortedList = this.props.notes.sort(this.filters[this.state.sortKey]);
        return <Wrapper>
            <Heading>Your Notes:</Heading>
            <Container>
              <ButtonContainer>
                <StyledButtonGroup>
                  <StyledButton
                    onClick={() =>
                      this.setState({ sortKey: 'Title_ASC' })
                    }
                  >
                    Sort By Title Ascending
                  </StyledButton>
                  <StyledButton
                    onClick={() =>
                      this.setState({ sortKey: 'Title_DESC' })
                    }
                  >
                    Sort By Title Descending
                  </StyledButton>
                </StyledButtonGroup>
                {/* <StyledButtonGroup>
                  <StyledButtonBottom
                    onClick={() => this.setState({ sortKey: 'ID_ASC' })}
                  >
                    Sort By ID Ascending
                  </StyledButtonBottom>
                  <StyledButtonBottom
                    onClick={() =>
                      this.setState({ sortKey: 'ID_DESC' })
                    }
                  >
                    Sort By ID Descending
                  </StyledButtonBottom>
                </StyledButtonGroup> */}
              </ButtonContainer>
              <Input type="text" value={this.state.searchInput} placeholder="Search Notes" onChange={this.handleSearchInput} />
            </Container>
            <List ref={this.dragulaDecorator}>
              {sortedList.map(note => {
                if (this.state.searchInput === '') {
                  return <IndividualNote key={note.id}>
                      <StyledLink to={`/notes/${note.id}`}>
                        <NoteHeading>{note.title}</NoteHeading>
                        <hr />
                        <Dotdotdot clamp={5}>
                          <ReactMarkdown source={note.text} />
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
