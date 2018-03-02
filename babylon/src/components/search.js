import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateSearch } from '../actions';

const StyledSearch = styled.div`
  display: flex;

  input {
    width: 200px;
    height: 40px;
    margin-top: 30px;
    padding: 8px;
    border: 1px solid #bfbfc0;
    border-radius: 2px;
    font-size: 1.4rem;
    letter-spacing: 1px;    
    &:focus {
      outline: none;
    }
  }
`;

class Search extends React.Component {
  componentDidMount() {
    this.props.updateSearch({
      input: '',
    });
  }

  handleChange = (event) => {
    this.props.updateSearch({
      input: event.target.value,
    });
  }

  render() {
    return (
      <StyledSearch>
          <input
            type='text'
            name='search'
            placeholder='Search Notes...'
            maxLength='60'
            onChange={this.handleChange}
            onKeyUp={this.handleChange}
            value={this.props.input}
          />
      </StyledSearch>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    input: state.input,
  };
};

export default connect(mapStateToProps, { updateSearch })(Search);
