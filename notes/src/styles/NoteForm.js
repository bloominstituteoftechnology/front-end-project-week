import styled, { css } from 'styled-components'
import { SVGIcon, ButtonsContainer  } from '.';

export const TitleInputContainer = styled.div`
    position: relative;
    display: none;
    ${SVGIcon} {
        position: absolute;
        right: 16px;
        opacity: .54;
        :hover {
            opacity: 1;
        }
    }
`;

export const InitialInput = styled.div`
    width: 100%;
    position: relative;
    textarea {
        resize: none;
        overflow: visible;
    }
`;

export const FormContainer = styled.form`
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);
    border-radius: 8px;
    color: rgb(32, 33, 36);
    width: 472px;
    height: 46px;
    margin: 32px auto 64px auto;
    position: relative;
    background-color: white;
    @media (max-width: 625px) {
        width: 90%;
    }
    input, textarea {
        border: none;
        height: 46px;
        padding: 12px 16px;
        font-size: 14px;
        line-height: 20px;
        outline: none;
        border-radius: 8px;
        background: transparent;
        width: 100%;
        overflow: hidden;
        white-space: wrap;
        overflow-wrap: break-word;
        ::placeholder {
            color: #202124;
        }
    }
    :focus-within {
        ${props => props.addForm && css `
            height: 169px;
            ${TitleInputContainer}{display: flex};
            ${ButtonsContainer}{display: flex};
            ${NoteActions} {display: none};
            textarea {height: auto};
            box-shadow: 0 1px 2px 0 rgba(60,64,67,0.30), 0 2px 6px 2px rgba(60,64,67,0.15);
        `}
    }
`;

export const NoteActions = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    height: 45px;
    width: 200px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${SVGIcon} {
        opacity: .54;
        height: 100%;
        margin-right: 10px;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
    }
`;