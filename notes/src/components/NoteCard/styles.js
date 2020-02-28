import styled from 'styled-components';
import { StyledP } from '../../mixins';
import { colors } from '../../variables';

export const StyledCard = styled.div`
  align-items: stretch;
  background: #ffffff;
  border: 1px solid ${colors.borderColor};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  height: 222px;
  padding: 13px 20px;
  width: 100%;
`;

export const StyledH5 = styled.h5`
  border-bottom: 1px solid ${colors.borderColor};
  color: ${colors.textColor};
  font-size: 1.8rem;
  overflow: hidden;
  padding-bottom: 9px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardP = styled(StyledP)`
  height: 166px;
  line-height: 2.2rem;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  ::before {
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
    bottom: 0;
    content: '';
    height: 30%;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;
