import React from 'react';

import { connect } from 'react-redux'
import styled from 'styled-components'
import './Reset.css'
import { fetchNotes, addNotes } from './actions'
import { Route } from 'react-router-dom'

import ListContent from './components/ListView/ListContent'
import CreateView from './components/CreateView/CreateView'
const AppDiv = styled.div`
    display: flex;
    width: 100%;
`
class App extends React.Component{
    componentDidMount(){
        this.props.fetchNotes()
    }
    handleClick = () => {
        this.forceUpdate()
    }
    render(){
        if ( this.props.error === null ) {
            return(
                <AppDiv>
                    <Route 
                        exact path='/' 
                        render={() => 
                        <ListContent 
                        handleClick = {this.handleClick} 
                        list={this.props.notes} 
                        error={this.props.error} />} 
                        />
                    <Route 
                        path = '/create'
                        render = {()=>
                        <CreateView 
                        addNotes = {this.props.addNotes}
                        handleClick={this.handleClick}/>} />
                </AppDiv>
                )
            }
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
    addNotes
})(App)