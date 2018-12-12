import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
  tags: {
    minWidth: '140px',
    flex: '1',
    flexDirection: 'column',
    overflow: 'hidden',
    overflowWrap: 'break-word',
    padding: '10px 0px 20px 5px',
    border: '1px solid #bdbdbd',
    borderRadius: 4,
    '&:hover': {
      border: '1.2px solid',
      '&:focus': {
        border: '1.4px solid #3f51b5',
      }
    },
  },
  tagLabel: {
    marginLeft: '10px',
  },
  scrollBar: {
    margin: '0px 0px 15px 0px',
    borderRadius: '4px',
  },
  chip: {
    fontSize: '14px',
    margin: '0px 0px 5px 0px',
  }
});

class Tags extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    const { classes } = this.props;

    return (
      <FormControl component="fieldset" className={ classes.tags }>
          <FormLabel component="legend" className={ classes.tagLabel }>Tags:</FormLabel>
          <Scrollbars className={ classes.scrollBar }>
            {this.props.tags.map( (tag, i) => <Chip label={tag} key={i} variant='outlined' color='primary' onDelete={() => {}} className={ classes.chip }/>)}
          </Scrollbars>
        </FormControl>
    );
  }
}

export default withStyles(styles)(Tags);
