import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const StyledCard = styled.div`
  padding: 3rem;
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  background-color: #fafafa;
  width: 30rem;
  height: 30rem;
  margin: 1.5rem;
`;

const HideOverflow = styled.div`
  margin: 0;
  padding: 0;
  height: 100%; /* important to have a fixed dimension on its immediate parent */
  overflow: hidden;
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #bdbdbd;
`;

const CardBody = styled.div`
  font-family: 'Raleway', sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Card = ({ note: { id, title, textBody } }) => {
  return (
    <StyledCard>
      <HideOverflow>
        <CardTitle>{title}</CardTitle>
        <CardBody>
          <ReactMarkdown source={textBody.substr(0, 250)} />
        </CardBody>
      </HideOverflow>
    </StyledCard>
  );
};

export default Card;
