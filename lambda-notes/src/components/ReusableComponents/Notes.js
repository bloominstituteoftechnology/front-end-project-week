import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';

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

    &:hover {
        background: #EAE6E6;
    }
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

export const NotesFormWrapper = styled.form`
    width: 100%;
`

export const NoteTitleInput = styled.input`
    width: 58.5%;
    height: 43px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid grey;
    font-size: 13px;
    padding: 0px 12px;
`

export const NoteContentInput = styled.textarea`
    width: 99.3%;
    height: 347px;
    border-radius: 5px;
    border: 1px solid grey;
    font: 400 13px Arial;
    padding: 19px 21px;
    resize: none;
`

export const NotesContent = styled(LinesEllipsis)`
    word-wrap: break-word;
    overflow: hidden;
    white-space: pre-line;
    margin: 8px 5px;
    max-height: 125px;
    max-width: 137px;
    width: 100%;
    font-size: 1.3rem;
    line-height: 1.5;
`