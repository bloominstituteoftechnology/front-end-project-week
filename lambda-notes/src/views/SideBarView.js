import React from 'react';
import styled from 'styled-components';
import ButtonContainer from '../components/ButtonContainer';

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const TitleContainer = styled.div`
  width: 100%;
  padding-left: 7%;
  font-size: 2.4rem;
  line-height: 1;
`;

const Title = styled.h1`
  /* border: solid forestgreen; */
`;

const SideBarView = props => {
  return (
    <SideBarContainer>
      <TitleContainer>
        <Title>Lambda Notes</Title>
      </TitleContainer>
      <ButtonContainer />
    </SideBarContainer>
  );
};

export default SideBarView;
