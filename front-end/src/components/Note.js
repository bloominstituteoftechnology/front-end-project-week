import React from 'react';
import styled from "styled-components";
import { Paper, Title, Text } from "./Styled"

const Note = styled(Paper)`
    :hover {
        background: #EA4C88;
        color: white;
    }
`;

export default props => {
    const { note } = props;

    return (
        <Note width="300px" height="300px">
            <Title>{note.title}</Title>
            <Text>{note.textBody}</Text>
        </Note>
    );
};