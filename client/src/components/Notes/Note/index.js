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
    flexDirection: 'column',

  },
  cardActionArea: {
    height: '100%',
    padding: '5px 10px',
    overflow: 'hidden',
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  cardContent: {
    overflow: 'hidden',
    // border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '0',
    flex: '1',
  },
  noteTitle: {
    overflow: 'hidden',
    fontSize: '22px',
    height: '60px',
    marginBottom: '10px',
    // border: '1px solid black',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent:'center',
    overflow: 'hidden',
  },
  noteContent: {
    fontSize: '15px',
    fontWeight: 'normal',
    // border: '1px solid black',
    height: '100%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '8px 0'
  },
  deleteIcon: {
    color: '#ff1744',
  }
};

class Note extends Component {
  constructor(props) {
    super(props);

    this.trimText = this.trimText.bind(this);
  }

  trimText(text) {
    let newText = text;
    let len = 270;
    if (newText.length > len) {
      newText = newText.split('').slice(0, len).join('') + '...'
    }
    return newText;

  }

  render() {

    const { classes } = this.props;

    return (
      <Card classes={{ root: classes.root }}>
        <CardActionArea classes={{ root: classes.cardActionArea }}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Typography variant='h5' classes={{ h5: classes.noteTitle }}>
              {this.props.title}
            </Typography>

            <Typography classes={{ root: classes.noteContent }}>
              {this.trimText(this.props.text)}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions classes={{ root: classes.cardActions }}>
          <Tooltip title='Edit'>
            <IconButton aria-label='Edit'>
              <EditIcon color='primary' />
            </IconButton>
          </Tooltip>

          <Tooltip title='Delete'>
            <IconButton aria-label='Delete'>
              <DeleteIcon className={ classes.deleteIcon }/>
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Note);
