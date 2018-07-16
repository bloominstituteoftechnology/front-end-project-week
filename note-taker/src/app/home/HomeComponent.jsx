import React from 'react';
import styled from 'styled-components';
import HeadingTitle from '../common/Titles/HeadingTitle';
import 'bulma/css/bulma.css';
import '../styles/custom-props.css';
const HomeWrapper = styled.div`

`;



const CardTitle = styled.div.attrs({
    className: 'card-header-title is-8'
})`
    text-transform: 'capitalize';
    border-bottom: 2px solid var(--main-border-color);
    padding-bottom: 1rem;
`;
const HomeComponent = (props) => {
    return (
        <HomeWrapper>
            <HeadingTitle>Your Notes:</HeadingTitle>
            <div className = 'columns is-multiline'>
                <div className = 'column is-one-third'>
                
                </div> {/*column*/}
            </div> {/*columns*/}
        </HomeWrapper>
    );
}
 
export default HomeComponent;