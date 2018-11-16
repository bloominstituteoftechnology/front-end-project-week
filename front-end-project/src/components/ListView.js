import React, { Component } from 'react';
import styled from 'styled-components';

// list view styled components

const ListViewContainer = styled.div`

`

const ListHeader = styled.h2`

`

class ListView extends Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [
                {   
                    "tags": ["tag", "otherTag"],
                    "title": "Sample Title 1",
                    "textBody": "Sample Body 1",
                },
                {
                    "tags": ["tag", "otherTag"],
                    "title": "Sample Title 1",
                    "textBody": "Sample Body 1",
                },
                {
                    "tags": ["tag", "otherTag"],
                    "title": "Sample Title 1",
                    "textBody": "Sample Body 1",
                },
            ]
        }
    }

    render() {
        return (
            <ListViewContainer>
                <ListHeader>Your Notes:</ListHeader>
            </ListViewContainer>
        )
    }
}

export default ListView;