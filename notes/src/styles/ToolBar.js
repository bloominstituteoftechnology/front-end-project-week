import styled, { css } from 'styled-components';
import CSVLink from '../components/CSVLink';

export const SideBar = styled.div`
    width: 280px;
    height: 100%;
    background-color: white;
    padding: 8px 0px;
    position: fixed;
    left: 0;
    transform: translateX(0);
    transition: all 450ms ease-in-out;
    img {display: none};
    @media(max-width: 890px) {
        box-shadow: 0 0 16px rgba(0,0,0,.28);
        z-index: 4;
        img{
            display: flex;
            padding: 16px 0px 16px 24px;
            object-fit: none;
        };
    }
    a {
        text-decoration: none;
    }
    @media(min-width: 890px) {
        transform: translateX(-280px);
        ${props => props.showMenu === true && css`
            transform: translateX(0px);
        `}
    }
    ${props => props.showMenu === false && css`
        transform: translateX(-280px);
    `}
`;

export const StyledCSV = styled(CSVLink)`
    font-family: 'Open Sans';
    letter-spacing: .55px;
    width: 100%;
    height: 48px;
    padding: 4px 0px 4px 12px;
    border-bottom-right-radius: 25px; 
    border-top-right-radius: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(32, 33, 36);
    font-size: 13px;
    line-height: 40px;
    font-weight: 600;
    cursor: pointer;
    :hover {
        background-color: #e8e8e8;
    }
    a {
        text-decoration: none;
        opacity: 1;
    }
    &.active {
        background-color: #feefc3;
    }
`;

export const Section = styled.span`
    font-family: 'Open Sans';
    letter-spacing: .55px;
    width: 100%;
    height: 48px;
    padding: 4px 0px 4px 12px;
    border-bottom-right-radius: 25px; 
    border-top-right-radius: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(32, 33, 36);
    font-size: 13px;
    line-height: 40px;
    font-weight: 600;
    cursor: pointer;
    :hover {
        background-color: #e8e8e8;
    }
    a {
        text-decoration: none;
        opacity: 1;
    }
    &.active {
        background-color: #feefc3;
    }
`;

export const Seperator = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ddd;
    margin: 8px 0px;
`;

export const SectionTitle = styled.span`
    margin-left: 20px;
    letter-spacing: 0.75px;
    ${props => props.title && css`:after{content: '${props.title}'}`}
`;

export const ToolBarLabel = styled.div`
    margin-top: 15px;
    padding-left: 24px;
    margin-bottom: 5px;
    height: 31px;
    line-height: 31px;
    font-family: 'Roboto';
    font-size: 11px;
    font-weight: 600;
    color: #5f6368;
    letter-spacing: 0.8px;
    &::after {
        ${props => props.account && css`
            content: 'ACCOUNT';
        `}
        ${props => props.export && css`
            content: 'EXPORT';
        `}
    }
`;
