import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    margin: '10px',
    width: '300px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column'

  },
  cardActionArea: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  noteTitle: {
    marginBottom: '10px'
  },
  noteContent: {
    fontSize: '15px',
    fontWeight: 'normal',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '8px 0'
  }
};

class Note extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { classes } = this.props;

    return (
      <Card classes={{ root: classes.root }}>
        <CardActionArea classes={{ root: classes.cardActionArea }}>
          <CardContent>
            <Typography variant='h5' classes={{ h5: classes.noteTitle }}>
              Title
            </Typography>

            <Typography classes={{ root: classes.noteContent }}>
              Content Content
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions classes={{ root: classes.cardActions }}>
          <Tooltip title='Edit'>
            <IconButton aria-label='Edit'>
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title='Delete'>
            <IconButton aria-label='Delete'>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Note);
