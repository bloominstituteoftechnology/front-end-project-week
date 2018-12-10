import React from 'react';

import { connect } from 'react-redux'
import styled from 'styled-components'
import './Reset.css'
import { fetchNotes } from './actions'
import { Route } from 'react-router-dom'

import ListContent from './components/ListView/ListContent'

const AppDiv = styled.div`
    display: flex;
    width: 100%;
`
class App extends React.Component{
    componentDidMount(){
        this.props.fetchNotes()
    }
    render(){
        return(
        <AppDiv>
            <Route exact path = '/' render = {() => <ListContent list = {this.props.notes} error = {this.props.error}/>} />
        </AppDiv>
        )
    }
}

const mapStatetoProps = state =>{
    return {
        notes: state.notesReducer.notes,
        error: state.notesReducer.error,
    }
}
export default connect(mapStatetoProps,{
    fetchNotes,
})(App)