import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { cancelDelete, confirmDelete, deleteNote, fetchNote, refresh } from '../actions'
import { connect } from 'react-redux'
import { SideNav } from '../components'
import { Grid } from '@material-ui/core'
import '../styles/NoteView.css'

const note = {}

class NoteView extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchNote(this.props.match.params.id)
    }

    render() {
    return (
        
    <div>  
        {console.log(this.props.note, 'this note')}
        <Grid container spacing={0} style={{height: '100%', overflow: 'scroll'}}>       
            {this.props.deleting ?
                <Grid item xs className="modalWrapper">
                    <h2 className="modalText"> Are you sure you want to delete this? </h2>
                    <div className="modalButtons">
                        <NavLink to="/"><button onClick={() => this.props.deleteNote(this.props.match.params.id)} style={{background: '#D0021B'}} className="button2">Delete</button></NavLink><button onClick={() => this.props.cancelDelete()} className="button2">Cancel</button>
                    </div>
                    </Grid> 
                    
                    : null}
    <Grid item xs={1}>
            <SideNav />
        </Grid>
        <div style={{marginLeft: 'calc(150px + 2vw)', width: 'calc(100% - (150px + 2vw)'}}>
    <Grid item xs={12}>
        
            <div className="note" style={{background: this.props.deleting ? 'gray' : '#F3F3F3', opacity: this.props.deleting ? '.4' : '1'}}>
                <div className="noteViewButtonWrap">
                    <NavLink to={`/edit/${this.props.match.params.id}`}>edit</NavLink>
                    <span onClick={() => this.props.confirmDelete()} style={{marginLeft: '4vh'}}> delete </span></div>
                <div onClick={() => this.props.cancelDelete()}>
                    <h3> {this.props.note.title} </h3>
                </div>
                <div onClick={() => this.props.cancelDelete()} className="noteText">
                    <div>
                        <p>{this.props.note.body}</p>
                    </div>
                </div>
            </div>

            </Grid>            
            </div>
            </Grid>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        deleting: state.notes.deleting_note,
        note: state.notes.current_note
    }
}

export default withRouter(connect(mapStateToProps, { cancelDelete, confirmDelete, deleteNote, fetchNote, refresh })(NoteView))