import styled from 'styled-components';
import { customLayout, customButton } from '../../mixins/index';

// NAVIGATION STYLES
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;
  min-height: 100vh;
  max-height: 100%;
  border-right: 1px solid #B7B5B7;
  background-color: #D3D2D3;
`;

export const Wrapper = styled.section`
  ${customLayout()}
  margin: 5%;
  max-height: 100%;
  flex-direction: column;
`;

export const Heading = styled.h1`
  width: 80%;
  margin-bottom: 20px;
  font-size: 4.5rem;
  font-weight: bold;
  color: #4B4B4A;
`;

export const Button = styled.button`
  ${customButton}
  width: 100%;
`;
