import styled, { css } from 'styled-components';
export * from './SVGs';
export * from './Header';
export * from './DeleteConfirm';
export * from './NoteSelect';
export * from './NoteModule';
export * from './ToolBar';
export * from './Note';
export * from './NoteList';
export * from './NoteForm';

export const ButtonsContainer = styled.div`
    position: absolute;
    width: 100%;
    bottom: 12px;
    display: ${props => props.display ? 'flex' : 'none'};
    justify-content: space-between;
    padding: 0px 16px;
`;

export const StyledButton = styled.button`
    font-size: 15px;
    font-weight: 600;
    user-select: none;
    outline: none;
    cursor: pointer;
    padding: 8px 24px;
    border: none;
    background-color: transparent;
    border-radius: 8px;
    :hover {
        background-color: rgba(0,0,0,.1);
    }
    ${props => props.active && css`
        :hover {
            background: #F5B504;
            color: white;
        }
    `}
`;

export const NotesContainer = styled.div`
  margin-left: 280px;
  display: block;
  direction: ltr;
  width: calc(100vw - 280px);
  transition: all 450ms ease-in-out;
  @media(max-width: 890px) {
    margin-left: 0px;
    width: 100%;
  }
  ${props => props.showMenu === false && css`
    margin-left: 0px;
    width: 100%;
  `}
`;

