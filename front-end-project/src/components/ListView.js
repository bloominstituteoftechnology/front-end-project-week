import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, CardHeader, CardContent, Typography, Grid } from '@material-ui/core'
import { SideNav } from '../components'
import '../styles/ListView.css'

const ListView = props => {

    return (        

    <div>
        <Grid container spacing={40} style={{overflow: 'scroll'}}>
            <Grid item xs={4} sm={3}>
                <SideNav />
            </Grid>
    <div style={{marginLeft: 'calc(20px + (150px + 2vw))', marginRight: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', height: '100vh'}}>
        {props.fetching ? (
            <Card className="mein-card">
                    <CardContent>
                        <Typography component="p" style={{overflow: 'hidden', height: '10vh'}}>
                            This page is currently loading.
                        </Typography>
                    </CardContent>
                </Card> ) :
        <React.Fragment>
            {props.notes.map(note => {
            return (
            <Grid item xs={12} sm={6} lg={4} key={note._id} style={{ height: '33%'}}>
                <Card className="mein-card">
                    <NavLink to={`/${note._id}`} style={{textDecoration: 'none'}} key={note._id}>     
                        <CardHeader title={`${note.title}`} />
                        <CardContent>
                            <Typography component="p" style={{overflow: 'hidden', height: '10vh'}}>
                                {note.body}
                            </Typography>
                        </CardContent>
                        </NavLink>
                    </Card>
                </Grid>
            
            )})}
        </React.Fragment> }
        </div>
    </Grid>
    </div>
    )
}
const mapStateToProps = state => {
    return {
        notes: state.notes.notes,
        fetching: state.notes.fetching_notes
    }
}

export default withRouter(connect(mapStateToProps)(ListView))