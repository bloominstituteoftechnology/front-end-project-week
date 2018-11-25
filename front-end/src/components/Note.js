import React from 'react';
import styled from "styled-components";
import { FlexRow, FlexColumn, Paper, Title, Text, Tag } from "./Styles/Components"

const Note = styled(Paper)`
    :hover {
        background: #EA4C88;
        color: white;
        
        .tag {
            border: thin solid white;
            color: white;
        }
    }
`;

export default props => {
    const { note } = props;

    return (
        <Note className="flex-column justify-between" width="300px" height="300px">
            <FlexColumn>
                <Title>{note.title}</Title>
                <Text>{note.textBody}</Text>
            </FlexColumn>

            <FlexRow width="full" wrap>
                {note.tags && note.tags.map((tag, i) => {
                    return (<Tag key={i} className="tag">{tag}</Tag>)
                })}
            </FlexRow>
        </Note>
    );
};