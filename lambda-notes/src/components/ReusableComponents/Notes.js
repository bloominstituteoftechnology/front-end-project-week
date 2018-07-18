import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotesWrapper = styled.div`
    width: 100%;
    background: #F3F3F3;
    padding: 0px 27px;
`

export const NotesCards = styled.div`
    display: flex;
    flex-wrap: wrap;  
    margin-top: 27px;
    font-size: 1.7rem;
    
`

export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
`

export const MainNotesHeader = styled.h3`
    margin-top: ${props => props.main ? '37px' : '58px'};
    font-size: 1.9rem;
    font-family: 'Roboto', Arial, sans-serif;
`

export const NotesCardLink = styled(Link)`
    color: black;
    text-decoration: none;
    width: 192px;
    height: 197px;
    margin-left: 3px;
    margin-right: 14px;
    margin-bottom: 24px;

    &:nth-child(3n+3) {
        margin-right: 0;
    }
`

export const NotesCardContainer = styled.div`
    background: white;
    border: 1px solid#979797;
    cursor: pointer;
    width: 192px;
    height: 197px;
    padding: 9px 10px;
`

export const NotesCardTitle = styled.h3`
    border-bottom: 1px solid #979797;
    font-size: 1.9rem;
    margin: 0 5px;
    padding-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`