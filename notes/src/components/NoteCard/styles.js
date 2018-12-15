import styled from 'styled-components';
import { StyledP } from '../../mixins';
import { colors } from '../../variables';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  height: 222px;
  background: #ffffff;
  padding: 13px 20px;
  /* border: 1px solid ${colors.buttonNegColor}; */
  border-radius: 7px;
`;

export const StyledH5 = styled.h5`
  color: ${colors.textColor};
  font-size: 1.8rem;
  text-align: left;
  padding-bottom: 9px;
  border-bottom: 1px solid ${colors.borderColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardP = styled(StyledP)`
  position: relative;
  height: 166px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 2.2rem;
  ::before {
    content: '';
    width: 100%;
    height: 30%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  }
`;
