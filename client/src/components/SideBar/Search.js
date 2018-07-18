import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styled from 'styled-components';

const Input = styled.input`
  margin: 15px 0;
  border-radius: 3px;
  border: 2px solid #aaa;
  height: 50px;
  width: 90%;
  font-size: 20px;
  padding: 0 10px;
`;

class Search extends Component {
  state = {
    search: ''
  };
  handleInput = e => {
    this.props.search(e.target.value);
  };
  render() {
    console.log(this.props);
    return <Input onChange={this.handleInput} placeholder="Search" />;
  }
}

const mapStateToProps = state => ({
  notes: state.notes
});
export default connect(
  mapStateToProps,
  actions
)(Search);
