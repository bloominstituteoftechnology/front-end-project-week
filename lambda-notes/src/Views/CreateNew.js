import React from 'react';
import MenuContainer from '../Containers/MenuContainer';
import styled from 'styled-components';


const CreateNewContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    width:100%;
`;
const FormContainter = styled.div`
    display:flex;
    justify-content:center;
    width:70%;
`;

const CreateNew = () => {
    return(
        <CreateNewContainer>
            <MenuContainer/>
            <FormContainter>
                <form>
                    <input type="text" name="title" placeholder="Note Title"/>
                    <input type="text" name="body" placeholder="Note Content"/>
                    <input type="submit" value="save" />
                </form>
            </FormContainter>
        </CreateNewContainer>
    )
}

export default CreateNew;