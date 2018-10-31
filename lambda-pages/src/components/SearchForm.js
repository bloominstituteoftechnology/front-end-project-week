import React, { Component } from 'react';
import styled from 'styled-components';
// import {connect} from 'redux';

const StyledSearchForm = styled.form`
  width: 100%;
  margin-bottom: 2rem;

  input {
    width: 100%;
    padding: 1rem;
    border-radius: 5px;
    border: none;
    font-size: inherit;
  }
`;

class SearchForm extends Component {
  state = {
    inputValue: ''
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <StyledSearchForm>
        {/* <InputFilter debounceTime={200} /> */}
        <input
          type="text"
          name="inputValue"
          value={inputValue}
          placeholder="Search for a note"
          onChange={this.handleInputChange}
        />
      </StyledSearchForm>
    );
  }
}

export default SearchForm;
