import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Button } from '../styles';
import { sortAscending, sortDescending } from '../actions';

const ButtonRow = styled.div`
  margin-bottom: 5rem;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const ButtonSmall = Button.extend`
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  margin: 0;
`;

const SortingOptions = ({ sortAscending, sortDescending }) => {
  return (
    <ButtonRow>
      <span>Sort by title:</span>
      <ButtonSmall onClick={sortAscending}>A-Z</ButtonSmall>
      <ButtonSmall onClick={sortDescending}>Z-A</ButtonSmall>
    </ButtonRow>
  );
};

export default connect(
  null,
  { sortAscending, sortDescending },
)(SortingOptions);
