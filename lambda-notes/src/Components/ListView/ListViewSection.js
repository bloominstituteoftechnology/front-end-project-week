import React from 'react';
import styled from 'styled-components';
import ListViewHeader from './ListViewHeader';
import ListViewBody from './ListViewBody';



const ListView = styled.div`
    display:flex;
    flex-direction:column;
`

const ListViewSection = props => {

    

    return(
        <ListView>
            <ListViewHeader></ListViewHeader>
            <ListViewBody></ListViewBody>
        </ListView>
    )
}


export default ListViewSection