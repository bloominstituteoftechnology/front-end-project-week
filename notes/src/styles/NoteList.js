import styled from 'styled-components';

export const NoteListContainer = styled.form`
    width: 90%;
    column-count: 1;
    column-gap: 8px;
    margin: 0 auto;
    position: relative;
    @media (min-width: 625px) {
        width: 500px;
        column-count: 2;
    }
    @media (min-width: 1030px) {
        width: 750px;
        column-count: 3;
    }
`;

export const NoteListTitle = styled.span`
    color: #5f6368;
    font-family: Roboto,Arial,sans-serif;
    letter-spacing: 0.8px;
    font-size: 10px;
    font-weight: 600;
    position: absolute;
    left: 8px;
    top: -25px;
`;
