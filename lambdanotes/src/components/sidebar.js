import React from 'react';
import styled from 'styled-components';

const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  border-right: 1px solid rgb(151, 151, 151);
  padding: 10px;
  background-color: rgb(216, 216, 216);
`

const ButtonStyled = styled.button`
  margin-bottom: 20px;
  height: 50px;
  width: 100%;
  background-color: rgb(94, 190, 195);
  color: #FFFFFF;
`

const Sidebar = (props) => {
  return(
    <SideBarStyled>
      <h1>Lambda Notes</h1>
      <ButtonStyled>View Your Notes</ButtonStyled>
      <ButtonStyled>+ Create New Notes</ButtonStyled>
    </SideBarStyled>
  )
}

export default Sidebar;