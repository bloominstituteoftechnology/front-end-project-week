import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { SideNav } from '../components'
import { Grid } from '@material-ui/core'
import '../styling/NoteView.css'


class NoteView extends Component {
    state = {
        deleting: false
    }
    confirmDelete() {
        this.setState({ 
          deleting: true
        })
      }
    
      cancelDelete() {
        this.setState({
          deleting: false
        })
      }

    render() {
    return (
        
        <div>  
            <Grid container spacing={0} style={{height: '100%', overflow: 'scroll'}}>       
                {this.state.deleting ?
                    <Grid item xs className="modalWrapper">
                        <h2 className="modalText"> Are you sure you want to delete this? </h2>
                        <div className="modalButtons">
                            <NavLink to="/"><button onClick={() => this.props.deleteNote(this.props.match.params.id)} style={{background: '#D0021B'}} className="button2">Delete</button></NavLink><button onClick={() => this.cancelDelete()} className="button2">Cancel</button>
                        </div>
                        </Grid> 
                        : <br></br>}
        <Grid item xs={1}>
                <SideNav />
            </Grid>
            <div style={{marginLeft: 'calc(150px + 2vw)', width: 'calc(100% - (150px + 2vw)'}}>
        <Grid item xs={12}>
            
                <div className="note" style={{background: this.state.deleting ? 'gray' : '#F3F3F3', opacity: this.state.deleting ? '.4' : '1'}}>
                    <div className="noteViewButtonWrap">
                        <NavLink to={`/edit/${this.props.match.params.id}`}>edit</NavLink>
                        <span onClick={() => this.confirmDelete()} style={{marginLeft: '4vh'}}> delete </span></div>
                   {this.props.current_note ?
                <React.Fragment>
                   <div onClick={() => this.cancelDelete()}>
                         <h3> {this.props.current_note.title} </h3>
                    </div>
                    <div onClick={() => this.props.cancelDelete()} className="noteText">
                        <div>
                            <p>{this.props.current_note.body}</p>
                        </div>
                    </div> 
                    </React.Fragment> : null}
                </div>
                </Grid>            
                </div> 
                </Grid>
                </div>
            )
        }
    }

export default NoteView