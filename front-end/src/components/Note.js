import React, {Component} from 'react';
import styled from "styled-components";
import {FlexRow, FlexColumn, Paper, Title, Text, Tag} from "./Styles/Components"

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

export default class extends Component {
    constructor(props) {
        super(props);

    }

    handleDragStart = () => {
        this.props.handleDragStart();
    };

    handleDragEnd = () => {
        this.props.handleDragDrop();
    };

    render() {
        const {note} = this.props;

        return (
            <Note className="flex-column justify-between" width="300px" height="300px" draggable="true"
                  onDragStart={() => this.handleDragStart()} onDragEnd={() => this.handleDragEnd()}>
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

    }


};