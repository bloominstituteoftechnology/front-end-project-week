import React from 'react';
import styled from 'styled-components';

const TopBorder = styled.div`
    margin-top:15px;
    border-bottom:1px solid #CCC;
`

const ListViewHeader = props =>{
    return(
        <TopBorder>
        </TopBorder>
    )
}

export default ListViewHeader;