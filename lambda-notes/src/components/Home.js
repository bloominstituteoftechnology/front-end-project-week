import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Note from './Note';

export const HomeContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    padding: 35px;
    background-color: #e6e0e0;
`

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`



export const HeaderContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    height: 130px;
    > h1 {
        color: #545252;
    }
`

const Home = props => {
    const arr = props.search ? props.notes.filter(note => JSON.stringify(note).toLowerCase().includes(props.search.toLowerCase())) : props.notes;    
    return  <HomeContainer>
                <HeaderContainer>
                    <h1>Your Notes:</h1>
                </HeaderContainer>
                <CardWrapper>
                        {arr.map(note => <Note history={props.history}
                        key={note._id} 
                        id={note._id} 
                        title={note.title} 
                        textBody={note.textBody} />).reverse()}              
                </CardWrapper>   
            </HomeContainer>
}

const mapStateToProps = state => {
    return {notes: state.notes}
}

export default connect(mapStateToProps)(Home);