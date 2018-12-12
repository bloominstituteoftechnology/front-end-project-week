import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import './Reset.css'
import { fetchNotes, addNotes,getNote,editNote,deleteNote } from './actions'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import Auth from './components/Authentication/Authentication'

import ListContent from './components/ListView/ListContent'
import CreateView from './components/CreateView/CreateView'
import NoteView from './components/NoteView/NoteView'
import DeleteNote from './components/DeleteNote/DeleteNote'
import EditNote from './components/EditNote/EditNote'

const AppDiv = styled.div`
    display: flex;
    width: 100%;
`
class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            path : '',
            location: undefined,
            loginStatus: this.props.loginStatus
        }
        console.log(this.props.location.pathname)
    }
    componentDidMount(){
        this.props.fetchNotes();
        console.log(this.props.history)
    }
    componentDidUpdate(nextProp){
        if(this.state.location !== nextProp.location.pathname){
            this.props.fetchNotes ();
            this.setState({location: nextProp.location.pathname})
        }
        
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
                        targetNote = {this.props.targetNote}
                        handleLogout ={this.props.handleLogout}
                        getNote = {this.props.getNote}
                        handleClick = {this.handleClick} 
                        list={this.props.notes} 
                        error={this.props.error} />} 
                    />
                    <Route 
                        path = '/create'
                        render = {()=>
                        <CreateView 
                        addNotes = {this.props.addNotes}
                        handleLogout={this.props.handleLogout}
                        handleClick={this.handleClick}/>} />
                    <Route 
                        path = {`/notes/:id`}
                        render={props => 
                        <NoteView  
                        location = {this.state.location}
                        note = {this.props.note}
                        getNote = {this.props.getNote}
                        handleLogout={this.props.handleLogout}
                         {...props}/>}/>
                    <Route 
                    path ={`/delete/:id`}
                        render={props => <DeleteNote 
                            note={this.props.note}
                            deleteNote = {this.props.deleteNote}
                            getNote={this.props.getNote}
                            handleClick = {this.handleClick}
                            handleLogout={this.props.handleLogout}
                            {...props} />}
                    />
                    <Route
                        path={`/edit/:id`}
                        render={props => <EditNote handleLogout = {this.props.handleLogout}editNote = {this.props.editNote} {...props} />}
                    />
                </AppDiv>
                )
            }
        }
}   

const mapStatetoProps = state =>{
    return {
        notes: state.notesReducer.notes,
        error: state.notesReducer.error,
        note: state.notesReducer.targetNote,
        newNote: state.notesReducer.newNote,
    }
}
export default withRouter(connect(mapStatetoProps,{
    fetchNotes,
    addNotes,
    getNote,
    editNote,
    deleteNote,
})(App))