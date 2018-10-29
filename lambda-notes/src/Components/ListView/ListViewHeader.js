import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
    font-size:2.4rem;
    margin-top:10px;
    margin-bottom:9px;
`
const TitleWrapper = styled.div`
    border-bottom:1px solid #CCC;
`

const ListViewHeader = props =>{
    return(
        <TitleWrapper>
            <Title>List View</Title>
        </TitleWrapper>
    )
}

export default ListViewHeader;