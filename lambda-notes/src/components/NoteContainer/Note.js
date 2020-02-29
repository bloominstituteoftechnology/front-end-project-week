import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { NoteTitle, NoteNumber } from './styled-components/NoteStyledComponents'
import { Wobble, FadeIn, Flip } from 'animate-css-styled-components'


const styles = theme => ({
 root: {
  width: 100,
  border: '3px solid green',
  margin: '0 auto',
 },
 paper: {
  padding: theme.spacing.unit * 1.5,
  maxWidth: 200,
  maxHeight: 400,
  margin: '0 auto',
  border: '2px solid black ',
  boxShadow: '10px 10px 12px #263238'
 },
 
 image: {
  width: 128,
  height: 128,
 },
})

class Note extends React.Component {

 constructor(props){
  super(props)
  this.state = {
   hovering: false
  }
 }

 render(){
  const { classes } = this.props
  // this.state = {hovering: false}
  return (

  <Wobble delay="0.5s">
  <Flip>

 <FadeIn>

  <div className={classes.root}> 
  <Link to={`/note/${this.props.id}`} style={{ textDecoration: 'none', color: 'black' }}>
   <Paper 
   
   className={classes.paper}>
    <Grid container spacing={0}>
     <Grid item>
      <ButtonBase>
      <NoteTitle>
      {this.props.title}
      </NoteTitle>
      </ButtonBase>
     </Grid>
     <Grid item xs={12} sm container>
      <Grid item xs container direction="column" spacing ={0}>
       <Grid item xs>
        <Typography style={{cursor: 'pointer'}}>
        </Typography>
       </Grid>
       <Grid item>
        <Typography variant="subtitle1">
        <NoteNumber>
        Note #{this.props.id}
        </NoteNumber>
        </Typography>
       </Grid>
      </Grid>
     </Grid>
    </Grid>
   </Paper>
  </Link>
  </div>
 </FadeIn>
  </Flip>
  </Wobble>
 )
}
}

export default withRouter(withStyles(styles)(Note))