import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { toggleModal, toggleModalBack, deleteNote } from '../actions'
import { connect } from 'react-redux'
import { SideNav } from '../components'
import { Grid } from '@material-ui/core'
import '../styles/NoteView.css'

const NoteView = props => {
    const notes = props.notes.filter(note => { return note.id.toString() === props.match.params.id.toString() })
    const individualNote = notes[0]
    return (
    <div>  
 
        <Grid container spacing={0} style={{height: '100%', overflow: 'scroll'}}>       
            {props.deleting ?
                <Grid item xs className="modalWrapper">
                    <h2 className="modalText"> Are you sure you want to delete this? </h2>
                    <div className="modalButtons">
                        <NavLink to="/"><button onClick={() => props.deleteNote(props.match.params.id)} style={{background: '#D0021B'}} className="button2">Delete</button></NavLink><button onClick={props.toggleModalBack} className="button2">Cancel</button>
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
                    <span onClick={props.toggleModal} style={{marginLeft: '4vh'}}> delete </span></div>
                <div onClick={props.toggleModalBack}>
                    <h3> {individualNote.note.title} </h3>
                </div>
                <div onClick={props.toggleModalBack} className="noteText">
                    <div>
                        <p>{individualNote.note.content}</p>
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

export default withRouter(connect(mapStateToProps, { toggleModal, toggleModalBack, deleteNote })(NoteView))