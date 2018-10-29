import React from 'react';
import styled from 'styled-components';
import ButtonContainer from '../components/ButtonContainer';

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 25%;
`;

const SideBarTitleContainer = styled.div`
  font-size: 2.4rem;
  line-height: 1;
  padding-left: 5%;
`;

const Title = styled.h1`
  /* border: solid forestgreen; */
`;

const SideBarView = props => {
  return (
    <SideBarContainer>
      <SideBarTitleContainer>
        <Title>Lambda Notes</Title>
      </SideBarTitleContainer>
      <ButtonContainer />
    </SideBarContainer>
  );
};

export default SideBarView;
