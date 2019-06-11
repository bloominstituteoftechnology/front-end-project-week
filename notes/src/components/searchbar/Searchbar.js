import React from 'react';
import styled from 'styled-components';


const Input = styled.input `
  height: 25px;
  width: 180px;
  text-align: center;
`;

export const Searchbar = (props) => {
  return (
    <form onSubmit={props.searchSubmit}>
    <Input onChange={props.change} placeholder="Search..." name='searchValue' value={props.searchValue} />
    </form>
  )
}
