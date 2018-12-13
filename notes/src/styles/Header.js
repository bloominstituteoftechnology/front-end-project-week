import styled, {css} from 'styled-components';
import { SVGIcon } from './SVGs';

export const StyledHeader = styled.div`
    width: 100vw;
    height: 64px;
    padding: 8px;
    font-family: 'Roboto';
    display: flex;
    flex-direction: 'row';
    justify-content: 'flex-start';
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    background-color: white;
    border: none;
    border-bottom: 1px solid rgb(218, 220, 224);
    z-index: 5;
`;

export const HamburgerContainer = styled.div`
    height: 48px;
    width: 48px;
    padding: 0px;
    margin: 0 4px;
    color: #767676;
    position: relative;
    cursor: pointer;
`;

export const Search = styled.div`
    background-color: #F5F5F5;
    width: 100%;
    height: 48px;
    border-radius: 8px;
    margin-right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border: none;
    :focus-within  {
        border: 1px solid rgba(0, 0, 0, 0.12);
        box-shadow: 0 1px 1px rgba(0,0,0,0.24);
        background: white;
    }
`;

export const SearchInput = styled.input`
    position: absolute;
    left: 64px;
    height: 48px;
    line-height: 48px;
    border: none;
    background-color: transparent;
    outline: none;
    font: normal 16px Roboto,sans-serif;
    width: 60%;
`;


export const ActionContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
`;

export const Actions = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    right: 26px;
    top: 0;
`;


export const MenuLogoContainer = styled.div`
    height: 48px;
    width: 210px;
    margin-right: 32px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-height: 27px;
    img {
        position: relative;
        height: 40px;
        width: 40px;
    }
    .keep-name {
        font-size: 22px;
        line-height: 24px;
        font-weight: 600;
        padding-left: 8px;
        color: #767676;
        position: relative;
    }
    @media (max-width: 890px) {
        width: 130px;
        img {display: none};
        .keep-name {display: none};
    }
    @media (max-width: 760px) {
        width: 100px;
        img {display: none};
        .keep-name {display: none};
    }
    @media (max-width: 690px) {
        width: 60px;
        img {display: none};
        .keep-name {display: none};
    }
    @media (max-width: 510px) {
        width: 30px;
        img {display: none};
        .keep-name {display: none};
    }
`;



export const Settings = styled.div`
    display: ${props => props.showSettings ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: flex-start;
    align-items: space-between;
    position: absolute;
    background-color: white;
    right: 10px;
    bottom: -90px;
    width: 130px;
    border-radius: 8px;
    z-index: 6;
    border: 1px solid rgb(218, 220, 224);
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);
`;

export const SettingsRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    opacity: .54;
    cursor: pointer;
    ${SVGIcon} {
        opacity: 1;
    }
    :hover {
        opacity: 1;
    }
    span {
        line-height: 50px;
        user-select: none;
    }
    ${props => props.user && css`
        cursor: default
        opacity: 1;
        ${SVGIcon} {
            opacity: 1;
            cursor: default;
        }
    `}
`;