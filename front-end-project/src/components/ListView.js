import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, CardHeader, CardContent, Typography, Grid } from '@material-ui/core'
import { SideNav } from '../components'
import '../styles/ListView.css'

const ListView = props => {
    return (    
    <div>
        <Grid container spacing={40}>
            <Grid item xs={1} sm={3}>
                <SideNav />
            </Grid>
    <div style={{overflow: 'scroll', marginLeft: '25%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', height: '100vh'}}>
        {props.notes.map(note => {
            return (
            <Grid item xs={11} sm={11} lg={3} key={note.id} style={{margin: '2vh', height: '25%'}}>
                <Card className="mein-card">
                    <NavLink to={`/note/${note.id}`} style={{textDecoration: 'none'}} key={note.id}>     
                        <CardHeader title={`${note.title.title}`} />
                        <CardContent>
                            <Typography component="p" style={{overflow: 'hidden', height: '100px'}}>
                                {note.title.content}
                            </Typography>
                        </CardContent>
                        </NavLink>
                    </Card>
                </Grid>
          )
        })}
        </div>
    </Grid>
    </div>
    )
}
const mapStateToProps = state => {
    return {
        notes: state.notes.notes
    }
}

export default connect(mapStateToProps)(ListView)