import React from 'react';
import SideBar from './components/SideBar'
import './Reset.css'
import {fetchNotes} from './actions'
import { connect } from 'react-redux'
class App extends React.Component{
    componentDidMount(){
        this.props.fetchNotes()
    }
    render(){
        return(
        <div className = 'App' >
            <SideBar />
        </div>
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