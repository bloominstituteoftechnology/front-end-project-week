import React from 'react';
import styled from 'styled-components';

const ContentForm = styled.form`
    width: 80%;
    height: 80%;
`;

const ContentInput = styled.input`
    width: 100%;
    height: 100%;
`;

const CreatorContentField = props => {
    return(
        <ContentForm onSubmit={props.submitContent}>
            <ContentInput
                type="text"
                value={props.note}
                placeholder="Note Content"
                onChange={props.changeContent}
            />
        </ContentForm>
    );
}

export default CreatorContentField;