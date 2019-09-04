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
import SideBar from '../Sidebar';

const CenteredDiv = styled.div`
	margin: 0 auto;
	max-width: 1364px;
	width: 100%;
	margin-top: 50px;
	display: flex;
	flex-wrap: wrap;
`;

const MainContainerDiv = styled.div`
    width: 100%;
    max-width: 1364px;
    background-color: #F3F3F3;
    padding: 0px;
    margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
`;

const MainContentDiv = styled.div`
    width: 71%;
    margin: 0 auto;
`;

class MainContainer extends React.Component {

    render() {
        return (
            <CenteredDiv>
                <MainContainerDiv>

                    <SideBar />
                    <MainContentDiv>
                        <Route exact path='/' component={ ToDoList } />
                        <Route path='/create' component={ AddToDo } />
                        <Route exact path ='/notes' component={ ToDoList } />
                        <Route path='/notes/:id' render={ props => <ViewOneNote { ...props } /> } />
                        <Route path='/edit/:id' render={ props => <EditNote {...props} /> } />
                    </MainContentDiv>
                </MainContainerDiv>
            </CenteredDiv>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default withRouter(connect( mapStateToProps )(MainContainer));