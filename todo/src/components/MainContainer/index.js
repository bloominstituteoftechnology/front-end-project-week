import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ToDoList from '../ToDoList';
import AddToDo from '../NewNote';
import EditNote from '../EditNote';
import ViewOneNote from '../ViewOneNote';
import '../App/index.css';

const MainContainerDiv = styled.div`
    width: 90%;
    background-color: #F3F3F3;
    padding: 0px;
`;

class MainContainer extends React.Component {

    render() {
        return (
            <MainContainerDiv>
                <Route exact path='/' component={ ToDoList } />
                <Route path='/create' component={ AddToDo } />
                <Route exact path ='/notes' component={ ToDoList } />
                <Route path='/notes/:id' render={ props => <ViewOneNote { ...props } /> } />
                <Route path='/edit/:id' render={ props => <EditNote {...props} /> } />
                

            </MainContainerDiv>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default withRouter(connect( mapStateToProps )(MainContainer));