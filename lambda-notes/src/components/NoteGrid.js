import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NotePreview from './NotePreview';

const StyledNoteGrid = styled.div`
  padding: ${props => props.theme.dimensions.noteGrid.padding};
  h1 {
    margin: ${props => props.theme.dimensions.noteGrid.headingMargin};
  }

  form.searchForm {
    display: flex;
    margin: ${props => props.theme.dimensions.noteGrid.searchFormMargin};

      label {
      font-family: ${props => props.theme.font.body};
      color: ${props => props.theme.color.formText};
      font-size: ${props => props.theme.dimensions.noteForm.labelFontSize};
      padding: ${props => props.theme.dimensions.noteForm.labelPadding};
  }

    input[type='text'] {
      width: ${props => props.theme.dimensions.noteGrid.inputWidth};
      border-radius: ${props =>
        props.theme.dimensions.noteGrid.inputBorderRadius};
      border-width: ${props => props.theme.dimensions.noteGrid.borderWidth};
      border-style: solid;
      border-color: ${props => props.theme.color.border};
      font-family: ${props => props.theme.font.body};
      color: ${props => props.theme.color.formText};
      padding: ${props => props.theme.dimensions.noteGrid.inputPadding};
    }
  }

  .notePreviewsContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: ${props => props.theme.dimensions.noteGrid.gridGap};
    padding: ${props => props.theme.dimensions.noteGrid.gridPadding};

    a,
    a:link,
    a:visited,
    a:hover,
    a:active {
      color: inherit;
      text-decoration: inherit;
      font-weight: inherit;
    }
  }
`;

export default class NoteGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: 'word',
      searchInput: ''
    };
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    let { notes } = this.props;
    notes = notes.map(note => (
      <Link key={note['_id']} to={`/view/${note['_id']}`}>
        <NotePreview note={note} />
      </Link>
    ));

    const { searchType, searchInput } = this.state;

    return (
      <StyledNoteGrid>
        <h1>Your Notes:</h1>
        <form class="searchForm">
          <input
            type="text"
            id="searchInput"
            name="searchInput"
            value={searchInput}
            onChange={this.updateInput}
          />
          <div>
            <div className="radio">
              <label>
                <input
                  name="searchType"
                  type="radio"
                  value="word"
                  checked={this.state.searchType === 'word'}
                  onChange={this.updateInput}
                />
                Word
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  name="searchType"
                  type="radio"
                  value="tag"
                  checked={this.state.searchType === 'tag'}
                  onChange={this.updateInput}
                />
                Tag
              </label>
            </div>
          </div>
        </form>
        <div
          className="notePreviewsContainer"
          searchType={searchType}
          searchInput={searchInput}
        >
          {notes}
        </div>
      </StyledNoteGrid>
    );
  }
}
