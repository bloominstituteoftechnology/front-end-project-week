import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { cancelDelete, deleteNote, fetchNote } from '../actions'
import { connect } from 'react-redux'
import { SideNav } from '../components'
import { Grid } from '@material-ui/core'
import '../styles/NoteView.css'



const NoteView = props => {

const note = props.fetchNote(props.match.params.id)
    return (
        
    <div>  
        <Grid container spacing={0} style={{height: '100%', overflow: 'scroll'}}>       
            {props.deleting ?
                <Grid item xs className="modalWrapper">
                    <h2 className="modalText"> Are you sure you want to delete this? </h2>
                    <div className="modalButtons">
                        <NavLink to="/"><button onClick={() => props.deleteNote(props.match.params.id)} style={{background: '#D0021B'}} className="button2">Delete</button></NavLink><button onClick={props.cancelDelete} className="button2">Cancel</button>
                    </div>
                    </Grid> : null}
    <Grid item xs={1}>
            <SideNav />
        </Grid>
        <div style={{marginLeft: 'calc(150px + 2vw)', width: 'calc(100% - (150px + 2vw)'}}>
    <Grid item xs={12}>
        
            <div className="note" style={{background: props.deleting ? 'gray' : '#F3F3F3', opacity: props.deleting ? '.4' : '1'}}>
                <div className="noteViewButtonWrap">
                    <NavLink to={`/edit/${props.match.params.id.toString()}`}>edit</NavLink>
                    <span onClick={props.deleteNote} style={{marginLeft: '4vh'}}> delete </span></div>
                <div onClick={props.cancelDelete}>
                    <h3> {note.title} </h3>
                </div>
                <div onClick={props.cancelDelete} className="noteText">
                    <div>
                        <p>{note.content}</p>
                    </div>
                </div>
            </div>

            </Grid>            
            </div>
            </Grid>
            </div>
        )
    }

const mapStateToProps = state => {
    return {
        deleting: state.notes.deleting,
        notes: state.notes.notes
    }
}

export default withRouter(connect(mapStateToProps, { cancelDelete, deleteNote, fetchNote })(NoteView))