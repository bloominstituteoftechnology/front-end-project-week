import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotesWrapper = styled.div`
    width: 100%;
    background: #F3F3F3;
    padding: 0px 27px;
`

export const NoteLinksContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 1.5rem;
    margin: 19px 34px;
`

export const NoteEditLink = styled(Link)`
    margin-right: 12px;
    color: black;
    font-weight: bold;
`

export const NoteDeleteLink = styled.div`
    color: black;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: flex-start;
`

export const HeaderTitle = styled.h3`
    display: inline;
    margin: 0;
    padding-right: 15px;
    font-size: 1.9rem;
    font-family: 'Roboto', Arial, sans-serif;
`

export const HeaderTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const HeaderTags = styled.span`
    font-size: 12px;
    background: #D9E8EF;
    margin: 5px;
    padding: 2px 0;
    padding-right: 5px;
    padding-left: 12px;

    &:hover {
        color: #6A81DE;
    }

    &:hover i {
        visibility: visible;
    }

    i {
        font-size: 10px;
        visibility: hidden;
        cursor: pointer;
    }
`

export const HeaderTagForm = styled.form`
    margin: 5px 0;
    min-height: 18px;
    display: flex;
`

export const HeaderTagInput = styled.input`
    max-width: 100px;
    margin-left: 5px;
    background: none;
    border: none;
    font-size: 12px;
    padding: 0 5px;
    outline: none;

    &:focus {
        background: #D9E8EF;
    }
`

export const NoteContent = styled.p`
    margin-top: 27px;
    font-size: 1.5rem;
    line-height: 1.5;
    word-break: break-all;
    white-space: pre-line;
`

export const NoteCheckListForm = styled.form`
    margin-top: 10px;
`

export const NoteCheckListInput = styled.input`
    border: none;
    outline: none;
    background: none;
    font-size: 11px;
    margin: 5px 0;
`

export const CheckListWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover img {
        visibility: visible;
    }

    span {
        font-size: 11px;
    }
`

export const CheckListContainer = styled.div`
    display: flex;
    align-items: center;
`

export const MoreIcon = styled.img`
    visibility: hidden;
    width: 11px;
    height: 11px;
    cursor: pointer;
`