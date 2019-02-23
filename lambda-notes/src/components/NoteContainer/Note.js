import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { NoteTitle, NoteNumber } from './styled-components/NoteStyledComponents'

const styles = theme => ({
 root: {
  width: 400,
 },
 paper: {
  padding: theme.spacing.unit * 1.5,
  marginTop: 40,
  maxWidth: 200,
  maxHeight: 400,
 },
 image: {
  width: 128,
  height: 128,
 },
})

const Note = props => {
 const { classes } = props
 return (
  <div className={classes.root}> 
  <Link to={`/note/${props.id}`} style={{ textDecoration: 'none', color: 'black' }}>
   <Paper className={classes.paper}>
    <Grid container spacing={8}>
     <Grid item>
      <ButtonBase>
      <NoteTitle>
      {props.title}
      </NoteTitle>
      </ButtonBase>
     </Grid>
     <Grid item xs={12} sm container>
      <Grid item xs container direction="column" spacing ={16}>
       <Grid item xs>
        <Typography style={{cursor: 'pointer'}}>
        </Typography>
       </Grid>
       <Grid item>
        <Typography variant="subtitle1">
        <NoteNumber>
        #{props.id}
        </NoteNumber>
        </Typography>
       </Grid>
      </Grid>
     </Grid>
    </Grid>
   </Paper>
  </Link>
  </div>
 )
}

export default withRouter(withStyles(styles)(Note))